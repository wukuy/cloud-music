const webpack = require('webpack');
const RendererConfig = require('./webpack.renderer');
const MainConfig = require('./webpack.main');
const { spawn } = require('child_process');
const electron = require('electron');
const path = require('path');
const express = require('express');
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const { getApiServer } = require('./utils.js');

// electron 进程
let electronProcess = null;
// 判断main进程是否重新编译. 如不是停止node(关闭编译)
let isMainRefresh = null;

// 启动渲染进程编译
function startRendere() {
    return new Promise((resolve, reject) => {
        const options = {
            quiet: true,
            contentBase: './dist',
            hot: true,
            host: 'localhost',
            clientLogLevel: 'none',
        };
        const port = 8210;
        const url = `http://localhost`;
        const app = express();

        let rendererConfig = RendererConfig('development');
        rendererConfig.plugins.push(...[
            new webpack.HotModuleReplacementPlugin(),
            new ProgressBarWebpackPlugin(),
            new FriendlyErrorsWebpackPlugin({
                compilationSuccessInfo: {
                    messages: [`Your application is running`],
                    notes: [`web server ${url}:${port}`, `api server http://localhost:8212`]
                },
            })
        ]);

        const complier = webpack(rendererConfig);

        let devMiddleware = webpackDevMiddleware(complier, {
            logLevel: 'silent'
        })

        let hotMiddleware = webpackHotMiddleware(complier, {
            log: false,
            heartbeat: 2000,
        })

        complier.hooks.afterEmit.tap('after-emit', () => {
            resolve();
        });

        app.use(devMiddleware);
        app.use(hotMiddleware);

        app.listen(port, 'localhost', () => { });

    });
}

// 启动electron
function startElectron() {
    electronProcess = spawn(electron, ['--inspect=5860', path.resolve(__dirname, '../dist/index.js')])
    electronProcess.stdout.on('data', (data) => {
        // console.log(`stdout: ${data}`);
    });
    electronProcess.stderr.on('data', (data) => {
        // console.log(`stderr: ${data}`);
    });
    electronProcess.on('close', () => {
        if (!isMainRefresh) process.exit()
    })
}

// 启动主进程编译
function startMain() {
    return new Promise((resolve, reject) => {
        const compiler = webpack(MainConfig('development'));
        compiler.hooks.afterEmit.tap('after-emit', () => {
            resolve();
        });

        compiler.watch({}, (err, stats) => {
            console.log(stats.toString('errors-only'));

            if (electronProcess) {
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

async function run() {
    let result = await getApiServer();
    if (result) {
        Promise.all([startRendere(), startMain()])
            .then((data) => {
                startElectron();
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

run();


