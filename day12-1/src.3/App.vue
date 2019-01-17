<template>
    <div id="app">
        <my-header>
            1111
            <small slot="aa">二级标题</small>
        </my-header>
        <my-ul 
        v-for="(val,index) in uldata"
        :key="index"
        :uldata="val"></my-ul>
    </div>
</template>
<script>
import myUl from '@/myul';
import uldata from './mock/data'
console.log(uldata);
export default {
    data(){
        return{
            uldata
        }
    },
    components:{
        myUl
    }
}
</script>

