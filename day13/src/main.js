import Vue from 'vue'
import App from './App'
import router from './router'
import footer from './components/footer';
import axios from 'axios';
Vue.prototype.http = axios;
Vue.component('elFooter',footer);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
