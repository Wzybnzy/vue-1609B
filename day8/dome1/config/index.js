const path = require('path');
const config = {
    entryPath:path.join(__dirname,'../src/app.js'),
    dev:{
        port:9000,
        host:"localhost",
        mode:'development',
        devtool:"cheap-module-source-map"
    },
    prod:{
        outputPath:path.join(__dirname,'../dist'),
        mode:'production',
        devtool:"inline-source-map"
    }
}

module.exports = config;