<template>
    <button 
        class="custom-button"
        :class="{[`button-${size}`]:size,['button-dark']:dark && !gray,['button-gray']:gray}"
        :type="type" 
    >
        <slot />
    </button>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props:['size','dark','type','gray']
}
</script>

<style lang="scss" scoped> 
.custom-button{
    height: calc(1.5rem + 1.75rem + 2px);
    white-space: nowrap;
    display: inline-block;
    font-weight: 500;
    color: #111;
    text-align: center;
    vertical-align: middle;
    cursor: pointer; 
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .875rem 1.75rem;
    font-size: 1rem;
    line-height: 1.5rem;
    border-radius: 0;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    &.button-dark{
        color: #fff;
        background-color: #1f1f1f;
        border-color: #1f1f1f;
        height: calc(1.5rem + 1.75rem + 2px);
        white-space: nowrap;
    }

    &.button-gray{ 
        background-color: #525252;
        border-color: #525252;
        color: #fff; 
    }

    &.button-sm{
        padding: .8125rem 1.5rem;
        font-size: .9375rem;
        line-height: 1.40625rem;
        border-radius: 0;
        height: calc(1.40625rem + 1.625rem + 2px);
    }
    &.button-lg{
        padding: 1.0625rem 2rem;
        font-size: 1rem;
        line-height: 1.5rem;
        border-radius: 0;
        height: calc(1.5rem + 2.125rem + 2px)
    }
}

</style>