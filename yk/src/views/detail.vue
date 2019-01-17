<template>
    <div>
        <main>
            详情
        </main>
        <footer>
            <input type="text">
        </footer>
    </div>
</template>
<script>
export default {
    created(){
        console.log(this.$route.query.id);
    }
}
</script>

