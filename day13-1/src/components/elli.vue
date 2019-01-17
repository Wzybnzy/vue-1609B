<template>
    <li @click="$router.push({name:'detail',params:{bookid}})">
        <span><img :src="img" ></span>
        <div>
            <h2>{{title}}</h2>
        </div>
    </li>
</template>
<script>
export default {
    props:['img','title','bookid']
}
</script>
<style lang="scss" scoped>
li{
    width: 30%;
    text-align: center;
    img{
        width: 100%;
    }
}
</style>


