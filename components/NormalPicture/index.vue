<template>
    <img :src="src" class="card-img-top"/>
</template>

<script>
export default {
    props:{
        src:{
            type:String,
            default:''
        }
    }
}
</script>

<style lang="scss" scoped>

</style>