<template>
    <header>
        <a href="javascript:;" v-if="back" @click="bus.$emit('backclick')"><</a>
        <slot></slot>
        <a href="javascript:;">···</a>
    </header>
</template>
<script>
    export default{
        props:{
            back:Boolean
        }
    }
</script>