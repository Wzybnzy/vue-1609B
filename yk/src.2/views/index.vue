<template>
    <div>
        <main>
             <swiper class="banner" :options="{loop:true,autoplay:true}">
                <swiper-slide v-for="(val,i) in swiperslide"
                :key="i">{{val}}</swiper-slide>
            </swiper>
            <div class="content">
                <h2>本周特价</h2>
                <ul class="scrollbox">
                    <elLi 
                    v-for="val in shopdata"
                    :key="val.id"
                    :cont="val"></elLi>
                </ul>
            </div>
        </main>
        
    </div>
</template>
<script>
import elLi from '@/components/elli';
import shopdata from "@/mock/index";
export default {
    data(){
        return {
            swiperslide:['1','2'],
            shopdata
        }
    },
    components:{
        elLi
    }
}
</script>
<style scoped>
.banner{
    width: 100%;
    height: 200px;
    line-height: 200px;
    background: red;
    color:#fff;
    text-align: center;
    overflow: hidden;
}
.scrollbox{
    /* width: 100%; */
    overflow: auto;
    display: flex;
}
.content{
    width: 100%;
    overflow: hidden;
}
::-webkit-scrollbar{
    opacity: 0;
}
</style>


