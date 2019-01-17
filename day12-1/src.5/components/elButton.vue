<template>
    <button @click="funs">{{cont.title}}</button>
</template>
<script>
export default{
    props:{
        cont:Object
    },
    methods:{
        funs(){
            this.$emit('clickbtn',this.cont);
        }
    }
}
</script>