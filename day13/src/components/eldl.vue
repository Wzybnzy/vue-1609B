<template>
    <dl @click="goxiangqing">
        <slot></slot>
        <dd>
            {{cont.text}}
            <div>
                <img 
                v-for="(val,i) in cont.textimg"
                :key="i"
                :src="'../static/'+val" alt="">
            </div>
            <p>评论个数：{{cont.commitcont.length}}</p>
        </dd>
    </dl>
</template>
<script>
export default {
    props:{
        cont:Object
    },
    methods:{
        goxiangqing(){
            if(this.cont.type==='zhiyan'){
                this.$router.push('/xiangqing/'+this.cont.id);
            }
        }
    }
}
</script>

<style scoped>
dl{
    width: 100%;
}
dt img{
    width: 50px;
    height: 50px;
    border-radius: 50%;

}
dd img{
    max-width: 33%;
}
</style>

