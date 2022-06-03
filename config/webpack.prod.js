const { merge } = require("webpack-merge");
const path = require("path");
const base = require("./webpack.base");

module.exports = merge(base, {
    output: {
        path: path.resolve(__dirname, "../dist"),
        clean: true
    },
    mode: "production"
});
