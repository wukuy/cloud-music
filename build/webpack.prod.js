const mainConfig = require('./webpack.main');
const rendererConfig = require('./webpack.renderer');
const webpack = require('webpack');

function startMain() {
    return new Promise((resolve, reject) => {
        // mainConfig.mode = 'production';
        const complier = webpack(mainConfig);

        complier.hooks.afterEmit.tap('after-emit', () => {
            resolve();
        });
        complier.run(()=> {
            console.log('main compile done');
        });
    });
}

function startRenderer() {
    return new Promise((resolve, reject) => {
        rendererConfig.mode = 'production';
        const complier = webpack(rendererConfig);

        complier.hooks.afterEmit.tap('after-emit', () => {
            resolve();
        });
        complier.run(() => {
            console.log('renderer compile done');
        });
    });
}

function run() {
    Promise.all([startRenderer(), startMain()])
    .then(() => {});
}

run();

