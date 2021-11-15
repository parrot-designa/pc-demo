<template>
  <div class="card bg-light mb-3">
    <div class="card-header bg-dark text-white d-flex">
      {{ title }} <span class="ml-auto">{{ status }}</span>
    </div>

    <div class="card-body text-secondary">
      <h5 class="card-title">￥100.00元</h5>
      <p class="card-text text-muted">订单满￥1000.00元可用</p>
      <small class="text-secondary">编号N/A</small>
      <br />
      <small class="text-muted">截至使用日期2021-10-30</small>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "已过期",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>