//  javascript =  DOM + BOM + ECMAscript(核心)

// es6 


//var function 

//let const 

// var a = function(){
//     console.log('1')
// }

// function a(){
//     console.log('2')
// }

// a();

//const 常量 
// const obj = {
//     person:"zs"
// };

// obj = {};

// console.log(obj);


// const str = 'bawei';
// if(10>5){
//     const str = 'zs';
//     console.log(str);
// }

// const str;
// if(10>5){
//     str = 'bawei';
    
// }
// console.log(str);

// var a = 20;
// console.log(global.a);

for(let i=0;i<10;i++){
    let i=20;
    {
        let i = "zs";
        console.log(i);
    }
    console.log(i);
}
let i='str';
console.log(i);



for(var n=0;n<5;n++){
    (function(m){
        var a = 'window';
        setTimeout(function(){
            console.log(m);  //0-4
        },100)
    })(n)
    // 
}

console.log(a);
