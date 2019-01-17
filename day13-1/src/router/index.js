import Vue from 'vue';
import VueRouter from 'vue-router';
import bookcity from "@/views/book/bookcity"
import bookshelf from "@/views/book/bookshelf"
import detail from "@/views/detail/detail"
import login from "@/views/login"
import ready from '@/views/ready'
import search from '@/views/search'

Vue.use(VueRouter);
const router =  new VueRouter({
    routes:[{
        path:'/',
        redirect:'/bookcity'
    },{
        path:'/bookcity',
        name:'bookcity',
        component:bookcity
    },{
        path:'/bookshelf',
        component:bookshelf
    },{
        path:'/detail/:bookid',
        name:'detail',
        props:true,
        // props:(route)=>{
        //     return {
        //         bookid:route.query.bookid,
        //         time:route.query.time
        //     }
        // },
        component:detail
    },{
        path:'/login',
        name:'login',
        component:login
    },{
        path:'/ready',
        name:"ready",
        // beforeEnter(to,from,next){
        //     if(localStorage.getItem('islogin')){
        //         next();
        //     }else{
        //         next({
        //             name:'login'
        //         })
        //     }
        // },
        component:ready
    },{
        path:'/search',
        name:'sarch',
        component:search
    }]
})
const pathname = ['detail','ready'];
router.beforeEach((to,from,next)=>{
    if(pathname.indexOf(to.name) != -1){
        if(localStorage.getItem('islogin')){
            next();
        }else{
            next({
                name:'login'
            })
        }
    }else{
        next();
    }
});

export default router;