/**
* Created by liubo on 15/3/11.
*/
var path = require('path');
var webpack = require('webpack');
//var ExtractTextPlugin = require("extract-text-webpack-plugin");

var appRoot = path.join(__dirname, './examples');
var bowerRoot = path.join(__dirname, './examples/scripts/vendor');
var nodeRoot = path.join(__dirname, './node_modules');


module.exports = function(options) {

    var entry = {
        app:'./examples/entry.jsx'
        //,css:'./app/entry-css.jsx'
        //,common:[
        //    "react"
        //    ,"react-router"
        //    ,"underscore"
        //    ,"zepto"
        //    ,"validate.js"
        //    ,"keymirror"
        //    ,"flux"
        //    ,"classnames"
        //]
    }


    // 凡是遇到jsx结尾的，都用jsx-loader这个插件来加载，
    // 且启用harmony模式
    var loaders = [
        { test: /\.jsx?$/, loaders: ['jsx-loader?harmony'] }
        ,{ test: /\.css$/, loader: 'style-loader!css-loader' }
        ,{ test: /\.scss$/, loader: 'style!css!sass' } // use ! to chain loaders
        //,{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" }
        ,{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        //,{test: /\.png$/, loader: "url-loader?mimetype=image/png"}
        //,{test: /\.gif$/, loader: "url-loader?mimetype=image/gif"}
        //,{test: /\.jpe?g$/, loader: "url-loader?mimetype=image/jpeg"}
    ];


    var publicPath = options.devServer ?
        "http://localhost:8080/" :
        "./";

    var output = {
        path: path.join(__dirname, "./dist/", options.prerender ? "build" : "release")
        ,publicPath: publicPath
        ,filename: '[name].js' + (options.longTermCaching && !options.prerender ? '?[chunkhash]' : '')
        ,sourceMapFilename: "[file].map"
        ,chunkFilename: "[id].js"
        ,hotUpdateMainFilename: "update.json"
        ,hotUpdateChunkFilename: "[id].update.js"
    };

    var alias = {
        bowerRoot: bowerRoot
        //,appModuleRoot: appModuleRoot
        ,nodeRoot: nodeRoot

    };

    var plugins = [
        new webpack.ProvidePlugin({
            React: "react"
            ,ReactRouter: "react-router"
            ,_: "underscore"
            ,validate: "validate.js"
            ,keyMirror: "keymirror"
            ,Flux: "flux"
            ,Classnames: "classnames"
        })
        ,new webpack.ResolverPlugin([
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ])
        //,new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 20 })
        ,new webpack.optimize.CommonsChunkPlugin("common", "common.js" + (options.longTermCaching && !options.prerender ? "?[chunkhash]" : ""))
    ];

    //压缩
    if(options.minimize) {
        plugins.push(
            new webpack.optimize.DedupePlugin(),
            new webpack.DefinePlugin({
                __DEBUG__: true  //屏蔽console调试代码
                ,"process.env": {
                    NODE_ENV: JSON.stringify("production")
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
                ,minimize: true
            }),
            new webpack.NoErrorsPlugin()
        );
    }

    return {
        entry: entry
        ,output: output
        ,devtool: options.devtool
        ,resolve: {
            root: [appRoot, nodeRoot, bowerRoot]
            ,alias: alias
            ,extensions: ['', '.js', '.jsx', '.css']
        }
        ,plugins:plugins
        ,module: {
            loaders: loaders
        }
        ,debug: options.debug
    };
}
