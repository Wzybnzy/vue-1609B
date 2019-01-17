const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractPlugin = require('extract-text-webpack-plugin');
const CssPlugin = new ExtractPlugin('[name].css')
const SassPlugin = new ExtractPlugin('scss/[name].css');
const bodyParser = require('body-parser');
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
            //use:['style-loader','css-loader']
            use:CssPlugin.extract({
                fallback:'style-loader',
                use:['css-loader']
            })
        },{
            test:/\.(eot|woff|svg|ttf)$/,
            loader:'url-loader'
        },{
            test:/\.(jpg|jpeg|png|gif)$/,
            loader:'file-loader'
        },{
            test:/\.(sass|scss)$/,
            //use:['style-loader','css-loader','sass-loader']
            use:SassPlugin.extract({
                fallback:'style-loader',
                use:['css-loader','sass-loader']
            })
        }]
    },
    devServer:{
        port:8000,
        hot:true,
        setup(app){
            app.use(bodyParser.urlencoded({extended:false}))
            app.get('/getdata',(req,res)=>{
                console.log(req.query);
                res.send({
                    title:"今日头条"
                })
            })
            app.post('/login',(req,res)=>{
                console.log(req.body);
                res.send('');
            })
        }
    },
    plugins:[
        new HtmlPlugin({
            template: "./aa.html", //模板文件
            filename:"index.html", //输出的文件名称
        }),
        new webpack.HotModuleReplacementPlugin(),
        CssPlugin,
        SassPlugin
    ]
}

module.exports = configObj;