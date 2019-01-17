<template>
    <div>
        <header>
            <span @click="$router.back()"><</span>
            详情
        </header>
        <div v-if="loading"></div>
        <main v-if="!loading"> 
            <elDl :cont="val">
                <dt v-if="val.type==='zhiyan'">
                    <span>{{val.name}}</span>
                </dt>
                <dt v-else>
                    <img :src="'../static/'+val.facephoto">
                    <p>
                        <b>{{val.name}}</b>
                        <span>{{val.tag}}</span>
                    </p>
                </dt>
            </elDl>
            <div>
                <h2>热门评论</h2>
                <ul>
                    <li v-for="(v,i) in val.commitcont">
                        <img :src="'../static/'+v.facephoto" alt="">
                        <p>
                            <b>{{v.name}}</b>
                            <span>{{v.text}}</span>
                        </p>
                    </li>
                </ul>
            </div>
        </main>
        <footer>
            <input type="text" v-model="text" placeholder="请评论">
            <button @click="addcommit">发送</button>
        </footer>
    </div>
</template>
<script>
import elDl from "@/components/eldl";
export default {
    data(){
        return {
            val:{},
            loading:true,
            text:"",
            username:'1609B',
            face:'img1.jpg'
        }
    },
    components:{
        elDl
    },
    created(){
        this.getdata(this.$route.params.id)
    },
    methods:{
        getdata(id){
            this.http.get('/api/detail?id='+id).then(data=>{
                this.val = data.data;
                console.log(this.val);
                this.loading = false;
            })
        },
        addcommit(){
            this.http.post('/api/addcommit',{
                id:this.val.id,
                name:this.username,
                facephoto:this.face,
                text:this.text
            }).then(data=>{
                if(data.data.code){
                    this.text = '';
                    this.getdata(this.val.id);
                }
            })
        }
    }
}
</script>
<style scoped>
    li img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
</style>


