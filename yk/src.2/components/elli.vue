<template>
   <li>
      <dl>
        <dt>
          <img :src="baseimg+cont.image" alt="">
        </dt>
        <dd>
          <h2>{{cont.title}}</h2>
          <p>{{cont.price}}</p>
           <button @click="bus.$emit('addcar',cont)">添加购物车</button>
        </dd>
      </dl>
    </li>
</template>

<script>
export default {
  data(){
    return {
      baseimg:'../static/'
    }
  },
  props:{
    cont:Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
  width: 100px;
  flex-shrink: 0;
  padding-left: 10px;
}
img{
  width: 100%;
  touch-action: none;
}
</style>
