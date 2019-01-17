import Vue from "vue";
import App from './App';
Vue.directive('focus',{
    inserted(el){
        el.focus();
    }
})
new Vue({
    el:'#app',
    render(h){
        return h(App,{
            props:{
                title:'hello'
            }
        })
    }
})