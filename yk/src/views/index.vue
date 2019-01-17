<template>
    <div>
        <header>
            <div style="display:inline-block;">
                <button @click="funs">全部板块</button>
                <ul v-show="open" class="selected">
                    <li v-for="(val,i) in typedata"
                    :key="i"
                    @click="filterData(val.bankuai)">{{val.bankuai}}</li>
                </ul>
            </div>
            <button @click="showtime">最新贴</button>
        </header>
        <main>
            <list 
            v-for="(val,i) in listdata"
            :key="i"
            :cont="val"></list>
        </main>
        <footer></footer>
    </div>
</template>
<script>
import list from '@/components/list';
export default {
    data(){
        return{
            listdata:[],
            typedata:[],
            alldata:[],
            open:false
        }
    },
    created(){
        this.http.get('/api/index').then(res=>{
           this.listdata = res.data;
           this.alldata = res.data;
           this.listdata.forEach((item,i)=>{
               item.timenum = new Date(item.ctime)*1;
               this.alldata[i].timenum = new Date(item.ctime)*1;
               if(this.typedata.findIndex(val=>val.bankuai===item.bankuai)===-1){
                   this.typedata.push({
                       bankuai:item.bankuai
                   })
               }
           })
        });
    },
    components:{
        list
    },
    methods:{
        funs(){
            this.open = !this.open;
        },
        filterData(bankuainame){
            this.listdata = this.alldata.filter(item=>item.bankuai===bankuainame);
            this.funs();
        },
        showtime(e){
            this.listdata.sort((a,b)=>b.timenum-a.timenum);
        }
    }
}
</script>
<style scoped>
.selected{
    width: 100px;
    background: rgba(0,0,0,.7);
    position: relative;
    z-index: 100;
    color:#fff;
}
</style>


