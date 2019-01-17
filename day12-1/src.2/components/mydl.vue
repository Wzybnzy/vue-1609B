<template>
    <dl @click="$emit('clickdl',cont.id)">
        <dt>
            <img :src="cont.img">
        </dt>
        <dd>
            <h2>{{cont.name}}</h2>
            <p>{{cont.info}}</p>
        </dd>
    </dl>
</template>
<script>
export default {
    props:['cont'],
    methods:{
        alertId(){
            // console.log(this.cont);
            // this.$emit()
           
        }
    }
}
</script>

