

//默认抛出一个js文件只能有一次
let n = Math.floor(Math.random()*10);
export {n}


export default (...n)=>{
    return n.reduce((prev,next)=>prev+next)
}

