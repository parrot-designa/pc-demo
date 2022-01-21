<template>
    <button class='btn' :class="[{'btn-dark':dark},{'btn-outline-dark':!dark},{'btn-block':block}]" @click="$emit('click')">
        <slot />
    </button>
</template>

<script>
export default {
    name:'NormalButton',
    props:{
        dark:{
            type:Boolean,
            default:true
        },
        block:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style lang="scss" scoped>

</style>