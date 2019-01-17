const fs = require('fs');
const path = require('path');
exports.getfile = function(name){
    const filename = path.resolve('src/mock',name);
    if(fs.existsSync(filename)){
        return JSON.parse(fs.readFileSync(filename,'utf8'));
    }
    return {code:0,mes:"暂无该数据"}
}  