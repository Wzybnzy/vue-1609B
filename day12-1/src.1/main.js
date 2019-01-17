import Vue from "vue";
import App from "./App";
console.log(App);  //js {}
let vm = new Vue({
    el:"#app",
    // template:'<app/>',
    // components:{
    //     App
    // },
    render:(h)=>h(App)  //createElement
});

window.vm = vm;


