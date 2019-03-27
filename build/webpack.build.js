const MainConfig = require('./webpack.main');
const RendererConfig = require('./webpack.renderer');
const webpack = require('webpack');
const { getApiServer } = require('./utils.js');

const NODE_ENV = process.env.NODE_ENV || 'production';

function startMain() {
    return new Promise((resolve, reject) => {
        const complier = webpack(MainConfig(NODE_ENV));

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
        const complier = webpack(RendererConfig(NODE_ENV));

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
    getApiServer().then(() => {
        Promise.all([startRenderer(), startMain()])
            .then(() => { });
    });
}

run();

