<template>
    <div>
        <h2>{{title}}</h2>
        <input type="file">
        <del-btn :index="index" @delclick="delclick"></del-btn>
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
        },
        methods:{
            delclick(i){
                this.$emit('delclick',i)
            }
        }
    }
</script>