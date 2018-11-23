const webpack = require('webpack');
const rendererConfig = require('./webpack.renderer');
const mainConfig = require('./webpack.main');
const { spawn } = require('child_process');
const electron = require('electron');
const path = require('path');
const webpackDevServer = require('webpack-dev-server');

// electron 进程
let electronProcess = null;
// 判断main进程是否重新编译. 如不是停止node(关闭编译)
let isMainRefresh = null;

// 启动渲染进程编译
function startRendere() {
    return new Promise((resolve, reject) => {
        const options = {
            contentBase: './dist',
            hot: true,
            host: 'localhost',
            clientLogLevel: 'none'
        };

        webpackDevServer.addDevServerEntrypoints(rendererConfig, options);
        const compiler = webpack(rendererConfig);
        
        compiler.hooks.afterEmit.tap('after-emit', () => {
            resolve();
        });

        const server = new webpackDevServer(compiler, options);
        server.listen(8210, 'localhost');
    });
}

// 启动electron
function startElectron () {
    electronProcess = spawn(electron, ['--inspect=5860', path.resolve(__dirname, '../dist/index.js')])
    electronProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });
    electronProcess.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    });
    electronProcess.on('close', () => {
        if(!isMainRefresh) process.exit()
    })
}

// 启动主进程编译
function startMain() {
    return new Promise((resolve, reject) => {
        const compiler = webpack(mainConfig);
        compiler.hooks.afterEmit.tap('after-emit', () => {
            resolve();
        });

        compiler.watch({}, (err, stats) => {
            console.log(stats.toString({
                // 增加控制台颜色开关
                colors: true
            }));
            
            if(electronProcess) {
                isMainRefresh = true;

                process.kill(electronProcess.pid);
                setTimeout(() => {
                    startElectron();
                    isMainRefresh = false;
                }, 1000);
            }
        });
    });
}

function run() {
    Promise.all([startRendere(), startMain()])
    .then((data) => {
        startElectron();
    })
    .catch((err) => {
        console.log(err);
    });
}

run();


