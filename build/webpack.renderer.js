const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = env => {
    return {
        mode: env,
        devtool: 'none',
        entry: {
            main: ['@babel/polyfill', './src/renderer/main.js', 'webpack-hot-middleware/client?noInfo=true&reload=true']
        },
        target: env == 'development' ? 'web' : 'electron-renderer',
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, '../dist'),
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ["transform-es2015-modules-commonjs", "transform-vue-jsx"],
                            cacheDirectory: true
                        }
                    }
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
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
                    test: /\.(gif|jpg|jpeg|png|woff|svg|eot|ttf)\??.*$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                                name(file) {
                                    let dirName = 'assets/font/';
                                    if (/\.(gif|jpg|jpeg|png)$/.test(file)) dirName = 'assets/images/';

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
            }),
            new CopyWebpackPlugin([
                { from: 'src/renderer/assets/images', to: 'assets/images' },
            ])
        ],
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': path.resolve(__dirname, '../src'),
                '@assets': path.resolve(__dirname, '../src/renderer/assets'),
                '@models': path.resolve(__dirname, '../src/renderer/models'),
                '@common': path.resolve(__dirname, '../src/renderer/common'),
                '@components': path.resolve(__dirname, '../src/renderer/components'),
                '@routes': path.resolve(__dirname, '../src/renderer/routes'),
                '@view': path.resolve(__dirname, '../src/renderer/view'),
                '@store': path.resolve(__dirname, '../src/renderer/store'),
                '@widgets': path.resolve(__dirname, '../src/renderer/widgets'),
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
