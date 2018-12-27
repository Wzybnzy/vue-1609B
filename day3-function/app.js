const app = {
    fns:[],
    callback(ctx){
        console.log(3);
        console.log(ctx)
    },
    use(fn){
        this.fns.push(fn);
    },
    go(ctx){
        let arr = this.fns;
        let index = 0;
        let newarr = [];
        arr.forEach(function(ck,i){ 
            
            newarr[index] = function(){
                index++; //2
            }
            //i=0 index =0
            //i=1 index =0
            if(index === i){ //1
                ck(ctx,newarr[index]) //1
            }
        })
        // console.log(index);
        if(arr.length === index){
            this.callback(ctx);
        }
    }
}

app.use(function(ctx,next){
    ctx.user = 'ww';
    console.log(1);
    next();
})

app.use(function(ctx,next){
    ctx.age = 15;
    console.log(2);
    next();
})

app.go({})


let funs = [function(obj,next){
    obj.name = '1609B'
    console.log(1)
   // next();
},function(obj,next){
    obj.person = 40;
    console.log(2)
}];

function callback(){
    console.log(3)
}

let o = {};
let index = 0;
funs[index](o,function(){
    index++;
});
funs[index](o,function(){
    index++
})
funs[2](o,function(){
    index++
})
console.log(o);
//{name:"1609B",person:40}