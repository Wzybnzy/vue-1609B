<template>
    <div>
        <header>
            <ul>
                <li 
                v-for="(val,i) in navdata"
                :key="i"
                :class="{active:i===index}"
                @click="change(i)">{{val.title}}</li>
            </ul>
        </header>
        <main>
            <elDl v-for="(val,i) in cont"
            :key="i"
            :cont="val">
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
        </main>
        <elFooter></elFooter>
    </div>
</template>
<script>
import elDl from "@/components/eldl";
export default {
    data(){
        return{
            index:2,
            navdata:[{
                title:"好友",
                type:'haoyou'
            },{
                title:"发现",
                type:'faxian'
            },{
                title:"职言",
                type:'zhiyan'
            }],
            cont:[]
        }
    },
    created(){
        this.getdata();
    },
    components:{
        elDl
    },
    methods:{
        getdata(){
            this.http.get(`/api/getlist?type=${this.navdata[this.index].type}`).then(data=>{
                this.cont = data.data;
            })
        },
        change(i){
            this.index = i;
            this.getdata();
        }
    }   
}
</script>
<style scoped>
li{
    display: inline-block;
}
li.active{
    color:#fff;
}
</style>


