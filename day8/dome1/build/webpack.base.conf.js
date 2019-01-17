//配置公用的loader
//配置入口文件
const config = require('../config/index');
const path = require('path');
const ExtractText = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const baseConfig = {
    entry:config.entryPath,
    module:{
        rules:[{
            test:/\.js$/,
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-env']
            }
        },{
            test:/\.css$/,
            // use:['style-loader','css-loader']
            use:ExtractText.extract({
                fallback:'style-loader',
                use:['css-loader']
            })
        },{
            test:/\.(png|jpg|jpeg|gif|svg|ttf|woff|eot)$/,
            loader:"url-loader",
            options:{
                limit:3000
            }
        }]
    },
    plugins:[
        new HtmlPlugin({
            filename:'index.html',
            template:path.join(__dirname,'../index.html'),
            title:'app'
        }),
        new ExtractText('style.css')
    ],
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js',
            'javascript':path.join(__dirname,'../src/js')
        }
    }
}
module.exports = baseConfig;