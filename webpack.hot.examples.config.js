/**
* Created by liubo on 15/3/11.
*/
module.exports = require("./webpack.make.examples.config")({
    devServer: true,
    hotComponents: true,
    devtool: "eval",
    debug: true
});