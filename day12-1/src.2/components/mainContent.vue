<template>
    <main>
        <my-dl v-for="(val,index) in list"
        :key="val.id"
        :cont="val"
        @clickdl="alertId"></my-dl>
    </main>
</template>
<script>
import myDl from "@/mydl";
export default {
    props:['list'],
    components:{
        myDl
    },
    methods:{
        alertId(id){
            alert(id);
        }
    }
}
</script>

