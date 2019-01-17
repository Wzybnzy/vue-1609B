<template>
    <div class="iconbox">
        <span class="icon"><i :class="'icon iconfont '+classname" :style="{background:color}"></i></span>
        <div class="tip">{{tip}}</div>
    </div>
</template>
<script>
export default {
    props:{
        classname:String,
        color:String,
        tip:String
    }
}
</script>
<style>
@import url(../font/iconfont.css);
.icon{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: block;
}
.tip{
    display: none;
}
.iconbox:hover .tip{
    display: block;
}
</style>


