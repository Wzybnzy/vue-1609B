<template>
    <div class="wrap">
        <el-header :back="false">
            <h2>篱笆闲聊</h2>
        </el-header>
        <main>
            <ul>
                <el-list 
                v-for="(val,index) in list"
                :key="val.id"
                :username="val.user"
                :title="val.title"
                :time="val.time"
                :index="index"
                :type="val.type"></el-list>
            </ul>
            <button @click="dialogopen=true">发帖</button>
        </main>
        <elDialog v-if="dialogopen" @successEvent="addSuccess"></elDialog>
    </div>

</template>
<script>
import axios from "axios";
import elList from '@/ellist';
import elDialog from '@/elDialog';

export default{
    data(){
        return{
            list:[],
            dialogopen:false
        }
    },
    components:{
        elList,
        elDialog
    },
    created(){
        this.getdata();
        this.bus.$on('backclick',()=>{
            this.dialogopen = false;
        })
    },
    methods:{
        getdata(){
            axios.get('/list').then((res)=>{
                this.list = res.data.data;
            });
        },
        addSuccess(){
            this.dialogopen = false;
            this.getdata();
        }
    }
}
</script>


