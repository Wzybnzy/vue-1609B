<template>
    <div class="wrap">
        <h2>{{title}}</h2>
        <transition 
        v-on:before-enter="before"
        enter-class="a-enter"
        enter-active-class="animated rotateOut"
        enter-to-class="a-enter-to"
        leave-class="a-enter"
        leave-active-class="animated slideOutUp"
        leave-to-class="a-enter-to">
            <div class="box" v-show="open"></div>
        </transition>
        <button @click="open = !open">显示隐藏</button>

        <input type="text" v-focus>
    </div>
</template>
<script>
import "./css/animate.css";
export default {
    data(){
        return{
            open:true,
            col:"skyblue"
        }
    },
    props:{
        title:String
    },
    // directives:{
    //     focus(el){
    //         el.style.border="2px solid red";
    //     },
    //     bgcolor(el,obj){
    //         el.style.background = obj.value;
    //     }
    // },
    methods:{
        before(el){
            // el.style.widht=""
        }
    }
}
</script>
<style>

.box{
    width: 200px;
    height: 200px;
    background: red;
}
.a-enter,.a-leave-to{
    opacity: 0;
    width: 0;
    height: 0;
}
.a-enter-to,.a-leave{
    opacity: 1;
    width: 200px;
    height: 200px;
}
.a-enter-active{
    animation: shows 3s;
}
@keyframes shows{
    0%{
        width: 0px;
        height: 0px;
        opacity: 0;
    }
    50%{
        width: 400px;
        height: 400px;
        border-radius: 50%;
        opacity: 0.5;
    }
    100%{
        width: 200px;
        height: 200px;
        border-radius: 0;
        opacity: 1;
    }
}
.a-leave-active{
    transition: all 1s;
}

</style>


