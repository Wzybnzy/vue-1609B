import Vue from 'vue'
import Router from 'vue-router'
 
Vue.use(Router)
//0-4
export default new Router({
  routes: [
    {
      path: '/',
      name: 'dongtai',
      component:()=>import('@/views/dongtai.vue')
    },
    {
      path: '/xiaoxi',
      name: 'xiaoxi',
      component:()=>import('@/views/xiaoxi.vue')
    },
    {
      path: '/xiangqing/:id',
      name: 'xiangqing',
      component:()=>import('@/views/xiangqing.vue')
    }
  ]
})
