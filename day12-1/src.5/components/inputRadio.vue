<template>
    <div>
        <h2>{{title}}</h2>
        <input type="radio" name="sex">男
        <input type="radio" name="sex">女
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