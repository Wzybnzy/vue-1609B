<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
  
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
