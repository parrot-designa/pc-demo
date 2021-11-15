<template>
    <button class='btn' :class="[{'btn-dark':dark},{'btn-outline-dark':!dark}]">
        <slot />
    </button>
</template>

<script>
export default {
    props:{
        dark:{
            type:Boolean,
            default:true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>