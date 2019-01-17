//启本地服务
//port
//host
//mode = development
//webpack-merge 合并webpack配置项
const config = require('../config/index');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.conf');
const webpackMerge = require('webpack-merge');
const devConfig = {
    mode:config.dev.mode,
    devtool:config.dev.devtool,
    devServer:{
        port:config.dev.port,
        host:config.dev.host,
        hot:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = webpackMerge(devConfig,baseConfig);