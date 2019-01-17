<template>
    <header>
        <a href="javascript:;"><</a>
        <h2 v-if="$slots.default">
            <slot name="default"></slot>
        </h2>
        <slot name="aa"></slot>
        <a href="javascript:;">分享</a>
    </header>
</template>
<script>
export default {
    mounted(){
        console.log(this.$slots);
    }
}
</script>

