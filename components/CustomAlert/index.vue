<template>
    <div class="alert alert-danger pt-4 mt-4">
        <div class="media-body pl-3">
            <div class="d-flex align-items-center mb-2 justify-content-between">
                <h6>{{title}}</h6>
                <custom-time />
            </div>
        </div>
        <p class="font-size-xs mb-1">有的</p>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:''
        }
    }
}
</script>

<style lang="scss" scoped>

</style>