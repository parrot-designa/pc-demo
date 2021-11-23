<template>
  <div class="rating font-size-xs text-dark">
    <div v-for="(star, index) in num" :key="index" class="rating-item">
      <i class="iconfont icon-star"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: Number,
      default: 5
    }
  }
};
</script>

<style lang="scss" scoped>
.rating {
  display: inline-flex;
}
</style>
