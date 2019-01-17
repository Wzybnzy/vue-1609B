<template>
    <div id="app">
        <header>{{title}}</header>
        <main>
            <div>
                <my-dl 
                v-for="( val , index ) in list"
                :key="val.id"
                :title="val.title"
                :time="val.publishTime"></my-dl>
            </div>
        </main>
    </div>
</template>
<script>
import MyDl from "@/mydl";
import axios from "axios";
// console.log(MyDl);
export default {
    // name:'app',
    data(){
        return {
            title:'17173',
            list:[]
        }
    },
    components:{
        MyDl
    },
    mounted(){
        axios.get('/getdata',{
            params:{
                pagenum:1,
                limit:10
            }
        }).then(data=>{
            this.list = data.data.data;
            window.vm = this;
        })
    }
}
</script>
<style>
*{
    padding:0;
    margin:0;
    list-style:none;
}
body,html,#app{
    width:100%;
    height:100%;
}
</style>



