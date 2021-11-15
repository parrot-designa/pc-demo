
<template>
    <div class="custom-control custom-radio">
        <input class="custom-control-input" />
        <label class="custom-control-label">
            <b>{{label}}</b>
            <span class="ml-5">{{text}}</span>
        </label>
    </div>
</template>

<script>
export default {
    props:{
        label:{
            type:String,
            default:''
        },
        text:{
            type:String,
            default:''
        }
    }
}
</script>

<style lang="scss" scoped>

</style>