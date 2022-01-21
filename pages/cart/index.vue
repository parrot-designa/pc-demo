<template>
  <div class="pt-7 pb-12">
    <b-container>
      <b-row>
        <b-col :cols="12">
          <h3 class="mb-10 text-center">我的购物车</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col :cols="12" :md="7">
          <ul
            class="list-group list-group-lg list-group-flush-x mb-6"
            v-if="list.length"
          >
            <CartItem
              v-for="(item, index) in list"
              :key="index"
              :name="item.product_name"
              :price="item.product_price"
              :src="item.product_thumb"
              :num="item.num"
              :gid="item.gid"
              :pid="item.pid"
              @onDelete="handleDelete"
              @onEdit="handleEdit"
            />
          </ul>
          <div v-else>
            <NormalButton @click="$router.push({ path: '/' })"
              >快去逛逛吧～</NormalButton
            >
          </div>
          <div
            class="row align-items-end justify-content-between mb-10 mb-md-0"
          >
            <div cols="12" md="auto">
              <NormalButton :dark="false" @click="handleClean">
                清空购物车
              </NormalButton>
              <NormalButton @click="getCart"> 更新购物袋 </NormalButton>
            </div>
          </div>
        </b-col>
        <b-col :cols="12" :md="5" :lg="4">
          <div class="card mb-7 bg-light">
            <div class="card-body">
              <ul
                class="
                  list-group list-group-sm list-group-flush-y list-group-flush-x
                "
              >
                <li class="list-group-item d-flex">
                  <span>小计</span>
                  <span class="ml-auto font-size-sm"
                    >¥{{ total.total_price }}</span
                  >
                </li>
                <li
                  class="list-group-item d-flex font-size-lg font-weight-bold"
                >
                  <span>总计</span>
                  <span class="ml-auto font-size-sm"
                    >¥{{ total.total_price }}</span
                  >
                </li>
                <li
                  class="list-group-item font-size-sm text-center text-gray-500"
                ></li>
              </ul>
            </div>
          </div>

          <NormalButton :block="true" @click="handleCheckout"
            >去结算</NormalButton
          >
          <NormalButton @click="$router.push({ path: '/' })"
            >继续购物</NormalButton
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CartItem from "./comps/CartItem.vue";
export default {
  components: {
    CartItem,
  },
  data() {
    return {
      list: [],
      total: {
        totalPrice: 0,
      },
    };
  },
  mounted: function () {
    this.getCart();
    this.getTotal();
  },
  computed: {},
  methods: {
    getCart: async function () {
      const res = await this.$api.cart.list();
      this.list = res.data.map((item, index) => ({
        ...item,
        ...item.product_info,
      }));
    },
    handleDelete: async function (params) {
      const res = await this.$api.cart.deleteItem(params);
      if (res.errcode === 0) {
        this.getCart();
      }
    },
    handleClean: async function () {
      await this.$api.cart.clean();
    },
    getTotal: async function () {
      await this.$api.cart.total();
    },
    handleEdit: async function (params) {
      await this.$api.cart.edit(params);
    },
    handleCheckout: async function () {
      if(this.list.length==0){
        return this.$toast.show('当前购物车无商品～')
      }
      const res = await this.$api.cart.shopCartBuy();
      if (res.errcode === 0) {
        this.$router.push("/checkout");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>