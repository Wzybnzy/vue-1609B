import data from "@/js/data"
import "@/css/style"
import Vue from "vue"

let mv = new Vue({
    el:'#app',  //挂载元素
    data:{
        title:"我的"
    }
});

window.mv = mv;
