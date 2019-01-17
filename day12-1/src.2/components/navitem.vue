<template>
    <button @click="changeNav">{{title}}</button>
</template>
<script>
export default {
    props:{
        title:String,
        index:Number
    },
    methods:{
        changeNav(){
            //this.$emit  //发送事件 
            this.$emit('clickButton',this.index)
            // console.log(this.index);
        }
    }
}
</script>

