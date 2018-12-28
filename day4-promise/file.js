const fs = require('fs');

//commonjs 规范只能用在服务端 nodejs 




function readFiles(url){
    return new Promise((resolve,reject)=>{
        fs.readFile(url,'utf8',(error,data)=>{
            if(error){
                reject(error)
                return;
            }
            resolve(data);
        })
    })
    
}
// readFiles('./style.css').then((buf)=>{ 
//     console.log(buf.toString());
// })
// readFiles('./template.html').then((buf)=>{
//     console.log(buf.toString());
// })
// async function concatFile(){

// }
// console.log(concatFile);

// let concatFile = async function(){
//    let html = await readFiles('./template.html');
//    let css = await readFiles('./style.css');
//    return html.replace('{{style}}',`<style>${css}</style>`)
// }
// concatFile().then((data)=>{

//     console.log(data);
// }).catch((data)=>{
//     console.log(data);
// })


//async 函数时Generator函数的语法糖
//async 返回值为一个promise对象  async的return返回值被resolve函数接受

async function getnum(time){
    let string = await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('abcd')
        },time)
    })
    return string.split('').reverse().join('');
}

// getnum(1000).then((s)=>{
//     console.log(s);
// })


function* getnum1(time){
    let string = yield new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('abcd')
        },time)
    });
    return string;
}
let o = getnum1(1000);
// o.next().value.then((str)=>{
//     console.log('111'+str);
    
// })

for(let a of o){
    console.log(a);
}



// function Page(obj){
//     this.data = obj.data;
//     this.select = obj.select;
// }
// Page.prototype.init = function(){

// }


class Page{
    constructor(obj){
        this.data = obj.data;
        this.select = obj.select;
        this.init();
        this.createDom();
    }
    init(){
        console.log('init');
    }
    createDom(){
        console.log('createDom')
    }
}
new Page({
    data:[1,2,3,4,4,5],
    select:[{
        num:2
    },{
        num:4
    },{
        num:6
    }],
    el:'.wrap'
});