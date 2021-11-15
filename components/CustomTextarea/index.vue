<template>
  <textarea class="form-control" :cols="cols" :rows="rows" />
</template>

<script>
export default {
  props: {
    cols: {
      type: Number,
      default: 28,
    },
    rows: {
      type: Number,
      default: 8,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>