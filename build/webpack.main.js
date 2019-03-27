const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = env => {
    return {
        mode: env,
        devtool: 'none',
        target: 'electron-main',
        entry: {
            index: './src/main/index.js'
        },
        output: {
            filename: '[name].js',
            path: path.join(__dirname, '../dist')
        },
        module: {
            rules: [
              {
                test: /\.js$/,
                type: "javascript/esm",
                exclude: /node_modules/,
              }
            ]
        },
        plugins: [
            new CopyWebpackPlugin([
                { from: './src/server', to: './server' }
            ])
        ],
    }
}