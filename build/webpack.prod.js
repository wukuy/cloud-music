const MainConfig = require('./webpack.main');
const RendererConfig = require('./webpack.renderer');
const webpack = require('webpack');

function startMain() {
    return new Promise((resolve, reject) => {
        const complier = webpack(MainConfig('production'));

        complier.hooks.afterEmit.tap('after-emit', () => {
            resolve();
        });
        complier.run((err, stats) => {
            console.log(stats.toString({
                colors: true
            }));
        });
    });
}

function startRenderer() {
    return new Promise((resolve, reject) => {
        const complier = webpack(RendererConfig('production'));

        complier.hooks.afterEmit.tap('after-emit', () => {
            resolve();
        });
        complier.run((err, stats) => {
            console.log(stats.toString({
                colors: true
            }));
        });
    });
}

function run() {
    Promise.all([startRenderer(), startMain()])
    .then(() => {});
}

run();

