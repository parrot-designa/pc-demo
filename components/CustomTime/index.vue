<template>
    <small class="text-muted mb-2">
        <i class="iconfont icon-shijian1 align-middle mr-2"></i>
        {{time}}
    </small>
</template>

<script>
export default {
    props:{
        time:{
            type:String,
            default:'(2021-06-02 13:58:59)'
        }
    }
}
</script>

<style lang="scss" scoped>

</style>