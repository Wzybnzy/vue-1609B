<template>
  <div id="app">
     <div class="content">
       <div class="addbox">
          <button @click="open = !open">新增</button>
          <ul v-show="open">
            <li 
            v-for="(val,i) in contdata"
            :key="i"
            @click="addtr(val)">{{val.title}}</li>
          </ul>
       </div>
       <table>
         <thead>
           <tr>
             <th>类型</th>
             <th>号码/账号</th>
             <th>提示内容</th>
             <th>操作</th>
           </tr>
         </thead>
         <tbody>
           <eltr 
           v-for="(val,i) in trdata"
           :key="i"
           :title="val.title"
           :name="val.name"
           :tip="val.tip"
           :index="i"
           @changevalue="changevalue"></eltr>
         </tbody>
       </table>
     </div>
     <div class="right-nav">
        <elicon
           v-for="(val,i) in trdata"
           :key="i"
           :color="val.color"
           :classname="val.class"
           :tip="val.tip"></elicon>
     </div>
  </div>
</template>

<script>
import eltr from './components/eltr';
import elicon from './components/elicon';
import contdata from './mock/data';
export default {
  name: 'app',
  data () {
    return {
      contdata,
      open:false,
      trdata:[]
    }
  },
  components:{
    eltr,
    elicon
  },
  methods:{
    addtr(data){
      if(this.trdata.find(item=>item.id===data.id)){
        alert('不能添加重复')
        return;
      }
      this.trdata.push(data);
      this.open = false;
    },
    changevalue(val,index){
      // console.log(val,index);
      this.trdata[index].tip = val;
      console.log(this.trdata);
    }
  }
}
</script>

<style lang="scss">
.right-nav{
  position: fixed;
  right: 0;
  bottom: 20px;
}
</style>
