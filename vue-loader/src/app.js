import Vue from "vue";
import MyDiv from "./components/mydiv";
console.log(MyDiv);
new Vue({
    el:"#app",
    components:{
        MyDiv
    }
})

//.vue vue-loader
//vue-loader 要手动引入vue-loader/lib/pulgin
//在plugins里去调用
//npm i vue-template-compiler vue-loader -D

