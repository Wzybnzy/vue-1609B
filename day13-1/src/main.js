import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index';
import base from "@/plugin/base";
Vue.use(base);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


//$router 全局路由对象
//$route 当前路由对象
