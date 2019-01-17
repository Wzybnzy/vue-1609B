<template>
    <ul>
        <li>{{uldata.name || uldata.dirname}}
            <div v-if="uldata.files">
                <aa 
                v-for="(val,index) in uldata.files"
                :key="index"
                :uldata="val"></aa>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    name:'aa',
    props:['uldata']
}
</script>

