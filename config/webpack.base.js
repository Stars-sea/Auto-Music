const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "static/js/index.js"
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        }, {
            test: /\.js$/i,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: "asset/resource",
            generator: {
                filename: "static/fonts/[hash:10][ext][query]"
            }
        }, {
            test: /\.(png|jpe?g|gif|webp|svg)$/i,
            type: "asset",
            generator: {
                filename: "static/images/[hash:10][ext][query]"
            }
        }, {
            test: /\.(mp3|mp4|avi)$/i,
            type: "asset/resource",
            generator: {
                filename: "static/media/[hash:10][ext][query]"
            }
        }]
    },
    plugins: [
        new ESLintPlugin({
            context: path.resolve(__dirname, "../src")
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html")
        }),
        new MiniCssExtractPlugin({
            filename: "static/css/index.css"
        })
    ]
}