<template>
    <header>
        <span @click="$router.go(-1)" v-if="goback"><</span>
        <slot></slot>
        <span class="login" v-if="login" @click="$router.push('login')"><i></i></span>
        <span v-if="gohome" @click="$router.push('bookcity')"><i></i></span>
     </header>
</template>
<script>
export default {
    props:{
        goback:{
            default:false,
            type:Boolean
        },
        login:{
            default:false,
            type:Boolean
        },
        gohome:{
            default:false,
            type:Boolean
        }
    }
}
</script>
<style scoped>
header{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #eee;
}
ul{
    display: inline-block;
    width: 100px;
}
.login{
    width: 20px;
    height: 20px;
    display: inline-block;
    background: red;
}
</style>


