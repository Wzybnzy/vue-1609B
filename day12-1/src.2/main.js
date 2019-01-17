import Vue from "vue";
import App from './App';
import myHeader from '@/myheader';
Vue.component('my-header',myHeader);
new Vue({
    el:"#app",
    render(createElement){
       return createElement(App)
    }
})