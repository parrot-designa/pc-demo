<template>
  <div class="tab-content">
    <slot />
  </div>
</template>


<script>
export default {
  name:'TabContent'
};
</script>

<style lang="scss"> 
.tab-content > .tab-pane{
    &.show{
        opacity: 1;
    } 
}
</style>
