/**
* Created by liubo on 15/3/11.
*/
module.exports = require("./webpack.make.config")({
    devServer: true,
    minimize: false,
    devtool: "eval",
    hotComponents: false,
    debug: true
});