<template>
  <div>
    <div class="form-inline pb-1">
      <CustomSelect :options="selectOptions" />
      <label class="text-nowrap ml-2 d-none d-lg-block"> 总计: 3 条</label>
    </div>
    <OrderCard />
    <OrderCard />
    <OrderCard />
    <CustomPagination />
  </div>
</template>

<script>
import OrderCard from "./comps/OrderCard.vue";
export default {
  data() {
    return {
      selectOptions: [
        { name: "近3个月订单", value: "1" },
        { name: "近6个月订单", value: "2" },
      ],
    };
  },
  components: {
    OrderCard,
  },
};
</script>

<style lang="scss" scoped>
</style>