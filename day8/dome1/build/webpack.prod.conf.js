// 构建
//mode = production
const config = require('../config/index');
const webpackMerage = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');

const prodConfig = {
    mode:config.prod.mode,
    devtool:config.prod.devtool,
    output:{
        path:config.prod.outputPath
    }
}

module.exports = webpackMerage(baseConfig,prodConfig);