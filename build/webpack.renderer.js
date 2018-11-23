const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'none',
    entry: './src/renderer/main.js',
    target: 'electron-renderer',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test:/\.(png)|(jpg)|(gif)|(woff)|(svg)|(eot)|(ttf)$/,
                use: [
                        {
                            loader: "url-loader",
                            options: {
                                limit:50000,   //小于50K的 都打包
                                name:"[hash:8].[name].[ext]",
                                // publicPath:"img/",	//替换CSS引用的图片路径 可以替换成爱拍云上的路径
                                // outputPath:"../img/"		//生成之后存放的路径
                            }
                        }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/renderer/index.html'),
            filename: 'index.html'
        }),
        /* new CleanWebpackPlugin('./dist/*', {
            root: path.resolve(__dirname, '../')
        }), */
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': 'src',
            '@assets': path.resolve(__dirname, '../src/renderer/assets'),
            '@common': path.resolve(__dirname, '../src/renderer/common'),
            '@model': path.resolve(__dirname, '../src/renderer/model'),
            '@routes': path.resolve(__dirname, '../src/renderer/routes'),
            '@view': path.resolve(__dirname, '../src/renderer/view'),
        }
    }
}