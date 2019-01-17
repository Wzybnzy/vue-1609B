<template>
    <div class="wrap">
        <div class="leftbox">
            <!-- <input-file :title="'文件'"></input-file> -->
            <!-- <input-text :title="'文件'"></input-text> -->
            <component 
            v-for="(val,index) in rightCont"
            :key="index"
            :is="val.componentName"
            :title="val.title"
            :index="index"></component>
        </div>
        <div class="rightbox">
            <el-button 
            v-for="(val,index) in buttonData"
            :key="index"
            :cont="val"
            @clickbtn="clickbtn"></el-button>
        </div>
    </div>

</template>
<script>
import buttonData from "./mock/button";
import elButton from "@/elButton";
import inputFile from "@/inputFile"
import inputRadio from "@/inputRadio"
import inputText from "@/inputText"
export default{
    data(){
        return {
            buttonData,
            rightCont:[]
        }
    },
    components:{
        elButton,
        inputFile,
        inputRadio,
        inputText
    },
    methods:{
        clickbtn(data){
            this.rightCont.push(data);
            console.log(this.rightCont);
        },
        delclick(i){
            console.log(111);
        }
    },
    watch:{
        '$root.index'(val){
            if(val){
                this.rightCont.splice(val,1);
            }
        }
    },
    mounted(){
        // this.bus.$on('delclick',(i)=>{
        //     this.rightCont.splice(i,1);
        // })
    }
}
</script>
<style>
@import url(./css/style.css);
</style>

