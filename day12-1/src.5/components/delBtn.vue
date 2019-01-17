<template>
    <button @click="delclick">删除</button>
</template>
<script>
    export default {
        props:{
            index:Number
        },
        methods:{
            delclick(){
                // this.$emit('delclick',this.index);
                // this.bus.$emit('delclick',this.index);
                this.$root.index = this.index;
            }
        }
    }
</script>