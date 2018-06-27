const webpack = require('webpack');
const MinCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    entry: {
        'app': './src/index.jsx',
        'vendor': ['react']
    },

    output: {
        path: __dirname + '/public',
        filename: '[name]-bundle.js'
    },

    devServer: {
        port: 3000,
        contentBase: './public'
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".json", ".jsx"]
    },
    plugins: [
        new MinCssExtractPlugin({
            filename: 'styles.css'
        }),
        new CopyWebpackPlugin([{
            from: './src/index.html',
            to: 'index.html'
        }])
    ],
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {

                test: /\.css$/,
                use: [
                    MinCssExtractPlugin.loader,
                    // 'style-loader', 
                    'css-loader'
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    }
};