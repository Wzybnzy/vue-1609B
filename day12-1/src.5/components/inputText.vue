<template>
    <div>
        <h2>{{title}}</h2>
        <input type="text" :placeholder="'请输入'+title">
         <del-btn :index="index"></del-btn>
    </div>
</template>
<script>    
   import delBtn from "@/delBtn";
    export default{
        props:{
            title:String,
            index:Number
        },
        components:{
            delBtn
        }
    }
</script>