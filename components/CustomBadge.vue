<template>
  <span class="custom-badge" :data-cart-times="text">
    <slot />
  </span>
</template>

<script>
export default {
    data(){
        return {}
    },
    props:['text']
}
</script>

<style lang="scss" scoped>
.custom-badge {
  position: relative;
  display: inline-block;

  &::before {
    content:  " (" attr(data-cart-items) ")";
    position: absolute;
    top: -0.5rem;
    right: -0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 19px;
    height: 19px;
    font-size: 11px;
    font-weight: 500;
    border-radius: 50%;
    border: 1px solid #fff;
    background-color: #ff6f61;
    color: #fff;
  }
}
</style>