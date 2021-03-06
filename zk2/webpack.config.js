const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const config = {
    entry:path.join(__dirname,'./src/app.js'),
    output:{
        filename:'[name]-[hash].js'
    },
    module:{
        rules:[{
            test:/\.js$/,
            loader:'babel-loader',
            include:/src/
        },{
            test:/\.css$/,
            use:['style-loader','css-loader'],
            include:/src/
        },{
            test:/\.(jpg|png|gif|jpeg|svg|eot|ttf|woff)$/,
            use:[{
                loader:'url-loader',
                options:{
                    limit:3000
                }
            }],
            include:/src/
        }]
    },
    devServer:{
        port:8080,
        hot:true
    },
    plugins:[
        new HtmlPlugin({
            template:'./index.html',
            filename:"index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve:{
        alias:{
            "vue$":'vue/dist/vue.esm.js',
            "@":path.join(__dirname,'src')
        },
        extensions:['.css','.js','.json','.vue']
    }
}

module.exports = config;