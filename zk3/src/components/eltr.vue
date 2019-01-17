<template>
    <tr>
        <td>{{title}}</td>
        <td>{{name}}</td>
        <td><div contenteditable="true" @input="changevalue">{{tip}}</div></td>
        <td><button>删除</button></td>
    </tr>
</template>
<script>
export default {
    data(){
        return {
            text:""
        }
    },
    props:['title','name','tip','index'],
    methods:{
        changevalue(e){
            this.text = e.target.innerHTML;
            this.$emit('changevalue',this.text,this.index);
        }
    }
}
</script>

