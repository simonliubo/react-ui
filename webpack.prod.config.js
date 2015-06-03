/**
 * Created by liubo on 15/3/11.
 */
module.exports = [
    require("./webpack.make.config")({
        // commonsChunk: true,
        longTermCaching: true
        //separateStylesheet: true,
        ,minimize: true
        // devtool: "source-map"
    })

    ,require("./webpack.make.config")({
        prerender: true
    })
];