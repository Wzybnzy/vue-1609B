<template>
    <div class="detail-cont">
    <elHeader :gohome="true" :goback="true">
        <span>书名{{bookid}}</span>
    </elHeader>
    <div class="loading" v-if="loadingOpen"> loading... </div>
    <div v-if="!loadingOpen">
        <dl>
            <dt>
                <img :src="cont.item.cover" alt="">
            </dt>
            <dd>
                <button @click="ready">点击开始阅读</button>
            </dd>
        </dl>
    </div>
    </div>
</template>
<script>
export default {
    props:['bookid'],
    // watch:{
    //     '$route.params.bookid'(val,oldval){
    //         this.getdata(val)
    //     }
    // },
    data(){
        return{
            cont:{},
            loadingOpen:true
        }
    },
    beforeRouteUpdate(to,from,next){
        //to
        if(to.name==='detail'){
            this.getdata(to.params.bookid)
        }
        next();
        //from
        //next
    },
    created(){
        this.getdata(this.bookid);
    },
    methods:{
        getdata(id){
            this.$http.get('/api/detail?bookid='+id).then(data=>{
                if(data.data.code===0){
                    alert('暂无数据');
                    this.$router.replace('/');
                }else{
                    this.cont = data.data;
                    this.loadingOpen = false;
                }
            })
        },
        ready(){
            this.$router.push({
                name:'ready'
            });
        }
    }
}
</script>
<style lang="scss" scoped>
    dl{
        display: flex;
        dt{
            width: 100px;
            img{
                width: 100%;
            }
        }
        dd{
            flex:1;
            overflow: hidden;
        }
    }
</style>


