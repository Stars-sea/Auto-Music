const { merge } = require("webpack-merge");
const base = require("./webpack.base")

module.exports = merge(base, {
    output: {
        path: undefined
    },
    devServer: {
        host: "localhost",
        port: "8080",
        open: false
    },
    mode: "development"
});