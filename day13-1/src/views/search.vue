<template>
    <div class="search" @click="open = false">
        <elHeader :goback="true">
            <input type="text" placeholder="请输入书名" v-model="text"
            @focus="open = true"
            @click.stop>
            <button @click.stop="getdata">搜索</button>
        </elHeader>
        <ul v-show="open">
            <li v-for="(val,i) in history"
            :key="i">{{val.name}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            text:'',
            open:false,
            history:[]
        }
    },
    created(){
        const local = localStorage;
        this.history = JSON.parse(local.getItem('searchlist')) || [];
    },
    // watch:{
    //     text(){
    //         this.getdata();
    //     }
    // },
    methods:{
        getdata(){
            this.$http.get('/api/search?search='+this.text).then((data)=>{
                console.log(data.data);
                this.addHistory();
                this.text = '';
            })
        },
        addHistory(){
            const local = localStorage;
            this.history = JSON.parse(local.getItem('searchlist')) || [];
            this.history.push({
                name:this.text
            });
            local.setItem('searchlist',JSON.stringify(this.history));
        }
    }
}
</script>

