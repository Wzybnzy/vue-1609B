<template>
    <dl @click="$router.push(`/detail?id=${cont.id}`)">
        <dt>
            <img src="/static/bg.png" alt="">
        </dt>
        <dd>
            <span>{{cont.nickname}}</span>
            <p>{{cont.address}}</p>
            <div>
                <b>{{cont.bankuai}}</b>
            </div>
            <p>{{cont.question}}</p>
        </dd>
        <dd>
            <time>{{cont.ctime}}</time>
            <span>{{cont.look}}</span><span>{{cont.message}}</span>
        </dd>
    </dl>
</template>
<script>
export default {
    props:{
        cont:Object
    }
}
</script>

