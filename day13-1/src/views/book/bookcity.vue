<template>
<div>
    <elHeader :login="true">
        <ul>
            <router-link to="/bookcity">书城</router-link>
            <router-link to="/bookshelf">书架</router-link>
        </ul>
    </elHeader>
    <section class="bookcity">
        <div class="searchbox" @click="$router.push('search')">search</div>
        <div class="banner">
            <swiper :options="options">
                <swiperSlide 
                v-for="(val,i) in banner"
                :key="i">
                <img :src="val.ad_pic_url">
                </swiperSlide>
            </swiper>
        </div>
       <div>
           <h2>本周最火</h2>
           <ul class="hotcont">
                <elli 
                v-for="(val,i) in hotdata"
                :key="i"
                :title="val.title"
                :img="val.cover"
                :bookid="val.fiction_id"></elli>
           </ul>
       </div>
    </section>
</div>
</template>
<script>
import {swiper, swiperSlide} from "vue-awesome-swiper";
import 'swiper/dist/css/swiper.css';
import elli from "@/components/elli";
export default {
    data(){
        return {
            banner:[],
            hotdata:[],
            options:{
                autoplay:true,
                loop:true
            }
        }
    },
    components:{
        swiper,
        swiperSlide,
        elli
    },
    created(){
        this.$http.get('/api/index').then((data)=>{
            this.banner = data.data.items[0].data.data;
            this.hotdata = data.data.items[1].data.data;
        })
    }
}
</script>
<style scoped>
.banner img{
    width: 100%;
}
.hotcont{
    display: flex;
    flex-wrap: wrap;
}

</style>



