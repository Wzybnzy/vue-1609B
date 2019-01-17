<template>
<div>
    <el-header :back="true">
        <h2>发帖</h2>
    </el-header>
    <input type="checkbox" v-model="checked">匿名发帖
    <input type="text" placeholder="请输入用户名" v-model="username"></input>
    <textarea placeholder="请输入评论内容" v-model="title"></textarea>
    <button @click="btn">发表</button>
</div>
</template>
<script>
import axios from 'axios';
export default{
    data(){
        return{
            checked:0,
            username:'',
            title:''
        }
    },
    methods:{
        btn(){
            axios.post('/addlist',{
                type:this.checked ? 0 : 1,
                user:this.username,
                title:this.title
            }).then((data)=>{
                if(data.data.code){
                    this.$emit('successEvent');
                }
            })
        }
    }
}

</script>