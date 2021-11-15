
<!-- 写给留言板的input框 -->
<template>
    <input class="form-control" :placeholder="placeholder"/>
</template>

<script>
export default {
    props:{
        placeholder:{
            type:String,
            default:'请输入...'
        }
    }
}
</script>

<style lang="scss" scoped>

</style>