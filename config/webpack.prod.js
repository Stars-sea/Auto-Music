const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'static/js/index.js',
        clean: true
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }, {
            test: /\.js$/i,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'static/fonts/[hash:10][ext][query]'
            }
        }, {
            test: /\.(png|jpe?g|gif|webp|svg)$/i,
            type: 'asset',
            generator: {
                filename: 'static/images/[hash:10][ext][query]'
            }
        }, {
            test: /\.(mp3|mp4|avi)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'static/media/[hash:10][ext][query]'
            }
        }]
    },
    plugins: [
        new ESLintPlugin({
            context: path.resolve(__dirname, "../src")
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html")
        })
    ],
    mode: 'production'
}