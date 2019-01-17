<template>
    <li>
        <h2 v-if="type!='0'">{{username}}</h2>
        <span v-if="type=='0'">匿名发帖</span>
        <p>{{title}}</p>
        <time>{{showtime}}</time>
        <button>回复</button>
    </li>
</template>
<script>
    export default{
        computed:{
            showtime(){
                return new Date(this.time).toLocaleString()
            }
        },
        props:[
            'username',
            'title',
            'time',
            'index',
            'type'
        ]
    }

</script>