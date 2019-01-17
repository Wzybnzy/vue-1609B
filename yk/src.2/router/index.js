import Vue from 'vue'
import Router from 'vue-router'

Vue.prototype.bus = new Vue();
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: ()=>import('@/views/index')
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: ()=>import('@/views/shopcar')
    }
  ]
})
