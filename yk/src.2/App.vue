<template>
  <div id="app">
    <header>首页</header>
     <router-view/>
    <footer>
      <router-link to="/">首页</router-link>
      <router-link to="/shopcar">购物车<span v-if="num!=0">{{num}}</span></router-link>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      shopcarlist:[],
      num:0
    }
  },
  created(){
    this.getdata();
    this.shopnum();
    this.bus.$on('addcar',data=>{
       let obj = this.shopcarlist.find(item=>item.id===data.id);
       if(obj){
         obj.num++;
       }else{
         data.num=1;
         this.shopcarlist.push(data)
       }
       localStorage.setItem('data',JSON.stringify(this.shopcarlist));
       this.shopnum();
    })
    this.bus.$on('changenum',()=>{
        this.getdata();
        this.shopnum();
    })
  },
  methods:{
     getdata(){
       this.shopcarlist = JSON.parse(localStorage.getItem('data')) || [];
     },
     shopnum(){
       this.num = this.shopcarlist.reduce((p,n)=>p+n.num,0);
     }
  }
}
</script>

<style>
*{
  padding:0;
  margin: 0;
  list-style: none;
}
body,html,#app{
  width: 100%;
  height: 100%;
}
#app{
  display: flex;
  flex-direction: column;
}
header,footer{
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: skyblue;
}
#app>div{
  flex:1;
  overflow: auto;
  width: 100%;
}
main{
  width: 100%;
}
</style>
