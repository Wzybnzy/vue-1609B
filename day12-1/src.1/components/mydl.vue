<template>
    <dl>
        <dt>
            <img :src="imgpath" alt="">
        </dt>
        <dd>
            <p>{{title}}</p>
            <time>{{showtime}}</time>
        </dd>
    </dl>
</template>
<script>
export default {
    name:'mydl',
    data(){
        return{

        }
    },
    computed:{
        showtime(){
            let tims = Date.now() - this.time ;
            if(tims < 86400000){
                return parseInt(tims/1000/60/60)+'小时前';
            }else{
                return new Date(this.time).toLocaleDateString();
            }
        }
    },
    // props:['title','imgpath','time']
    props:{
        title:String,   //instanceof 
        imgpath:{
            type:String,  //类型
            // required:true,  //必填项
            default:'http://www.sucaijishi.com/uploadfile/2015/0210/20150210104950809.gif', // default 默认值 如果想返回函数或数组引用类型的值，default需要定义成函数 返回一个新数组或对象
            // default:()=>{
            //     return []
            // }
            // validator(val){  //自定义验证规则 返回boolean
            //     // console.log('1111'+val);
            //     // console.log('http:'+val)
            //     return /^\//.test(val);
            // }
        },
        time:{
            type:Number
        }
    }
}
</script>
<style lang="scss" scoped>
dl{
    width:100%;
    display:flex;
    dt{
        width:160px;
        height:100px;
        img{
            width: 100%;
        }
    }
    dd{
        flex:1;
        overflow:hidden;
    }
}
</style>


