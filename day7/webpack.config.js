const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
let configObj = {
    entry:path.join(__dirname,'src/app.js'),
    output:{
        filename:'app.js'
    },
    module:{
        rules:[{
            test:/\.js$/,
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-env']
            }
        },{
            test:/\.css$/,
            use:['style-loader','css-loader']
        },{
            test:/\.(eot|woff|svg|ttf)$/,
            loader:'url-loader'
        },{
            test:/\.(jpg|jpeg|png|gif)$/,
            loader:'file-loader'
        },{
            test:/\.(sass|scss)$/,
            use:['style-loader','css-loader','sass-loader']
        }]
    },
    devServer:{
        port:8000,
        hot:true 
    },
    plugins:[
        new HtmlPlugin({
            template: "./aa.html", //模板文件
            filename:"index.html", //输出的文件名称
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = configObj;