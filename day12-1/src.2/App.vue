<template>
    <div id="app">
        <my-header></my-header>
        <nav>
            <nav-item 
            v-for="(val,index) in bookData"
            :key="val.id"
            :title="val.title"
            :index="index"
            @clickButton="clickButton"></nav-item>
        </nav>
        <main-content :list="cont"></main-content>
    </div>
</template>
<script>
import navItem from "@/navitem";
import mainContent from "@/mainContent";
import {bookData} from "./mock/data";
// console.log(bookData.data);
export default {
    data(){
        return{
            bookData:bookData.data,
            cont:bookData.data[0].cont
        }
    },
    components:{
        navItem,
        mainContent
    },
    mounted(){
        //接受事件
        // console.log(111);
        this.$on('clickdl',(id)=>{
            console.log(id);
        })
    },
    methods:{
       clickButton(i){
           this.cont = this.bookData[i].cont;
           console.log(this.$root.text);
       }
    }
}
</script>

