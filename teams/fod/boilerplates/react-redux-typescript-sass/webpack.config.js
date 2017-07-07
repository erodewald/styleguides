const { CheckerPlugin } = require('awesome-typescript-loader');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./config/paths');
const webpack = require('webpack');

const extractSass = new ExtractTextPlugin({
    filename: 'static/css/[name].css'
});

module.exports = {
    bail: true,
    entry: {
        main: paths.appJs
    },
    output: {
        chunkFilename: 'static/js/[name].chunk.js',
        filename: 'static/js/[name].js',
        path: paths.distFolder,
        publicPath: '/',
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.jsx']
    },
    devtool: 'source-map',
    module: {
        strictExportPresence: true,
        loaders: [
            {
                test: /\.(ts|tsx)$/,
                loader: require.resolve('tslint-loader'),
                enforce: 'pre',
                include: paths.srcFolder,
            },
            {
                test: /\.js$/,
                loader: require.resolve('source-map-loader'),
                enforce: 'pre',
                include: paths.srcFolder,
            },
            {
                test: /\.(ts|tsx)$/,
                include: paths.srcFolder,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.scss$/,
                loader: extractSass.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [
                                    require('postcss-easy-import')({
                                        prefix: '_'
                                    }),
                                    require('autoprefixer')({
                                        browsers: [
                                            '>1%',
                                            'last 4 versions',
                                            'Firefox ESR',
                                            'not ie < 9',
                                        ],
                                        flexbox: 'no-2009',
                                    })
                                ]
                            }

                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml
        }),
        extractSass
    ],
    devServer: {
        contentBase: paths.srcPath,
        hot: true,
        stats: {
            warnings: false
        }
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    }
}
