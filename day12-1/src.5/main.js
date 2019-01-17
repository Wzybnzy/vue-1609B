import Vue from "vue";
import App from './App';
// Vue.prototype.bus = new Vue();
window.vm = new Vue({
    el:'#app',
    data:{
        index:null
    },
    render(h){
        return h(App)
    }
})