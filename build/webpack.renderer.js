const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = env => {
    return {
        mode: env,
        devtool: 'none',
        entry: {
            main: './src/renderer/main.js',
        },
        target: env == 'development' ? 'web' : 'electron-renderer',
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, '../dist'),
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: 'vue-loader'
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                    ]
                },
                {
                    test: /\.styl(us)?$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        'stylus-loader'
                    ]
                },
                {
                    test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                                name(file) {
                                    let dirName = 'assets/font/';
                                    if(/\.(gif|jpg|png)$/.test(file)) dirName = 'assets/images/';
    
                                    return `${dirName}[name].[hash:6].[ext]`;
                                }
                            }
                        },
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
            new CleanWebpackPlugin('./dist/*', {
                root: path.resolve(__dirname, '../')
            })
        ],
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': path.resolve(__dirname, '../src'),
                '@assets': path.resolve(__dirname, '../src/renderer/assets'),
                '@common':  path.resolve(__dirname, '../src/renderer/common'),
                '@components': path.resolve(__dirname, '../src/renderer/components'),
                '@routes': path.resolve(__dirname, '../src/renderer/routes'),
                '@view': path.resolve(__dirname, '../src/renderer/view'),
            }
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendors",
                        chunks: "all"
                    }
                }
            }
        }
    }
}
