<template>
  <div>
     
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