import Vue from "vue";
import App from "./App"
import header from "@/myheader";
Vue.component('my-header',header);
new Vue({
    el:'#app',
    render:(h) => h(App)
})