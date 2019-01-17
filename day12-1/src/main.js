import Vue from "vue";
import App from './App';
import bus from './plugins/bus';
import header from './plugins/header';
Vue.use(bus);
Vue.use(header);
new Vue({
    el:'#app',
    render(h){
        return h(App)
    }
})