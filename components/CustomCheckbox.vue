
<template>
    <div class="custom-control custom-checkbox" :class="[{'checked':checked}]">
        <input class="custom-control-input" />
        <label class="custom-control-label font-size-sm collapsed">
             {{label}}
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
        },
        checked:{
            type:Boolean,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>