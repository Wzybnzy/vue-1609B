const path = require('path');
module.exports = {
    entry:{
        app:path.join(__dirname,'src/app.js'),
        aa:path.join(__dirname,'src/index.js')
    },
    output:{
        path:path.join(__dirname,'build'),
        filename:'[name].js'
    },
    module:{
        rules:[{
            test:/\.(js|jsx)$/,
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-env']
            }
        },{
           test:/\.css$/,
           use:['style-loader','css-loader'] 
        },{
            test:/\.(jpg|png|gif|svg|jpeg)$/,
            //url-loader file-loader
            loader:'url-loader',
            options:{
                limit:4000
            }
        }]
    }
}