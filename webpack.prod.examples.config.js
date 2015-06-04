/**
 * Created by liubo on 15/3/11.
 */
module.exports = [
    require("./webpack.make.examples.config")({
        // commonsChunk: true,
        longTermCaching: true
        //separateStylesheet: true,
        ,minimize: true
        // devtool: "source-map"
    })

    ,require("./webpack.make.examples.config")({
        prerender: true
    })
];