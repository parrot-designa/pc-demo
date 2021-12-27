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
          <ul class="list-group list-group-lg list-group-flush-x mb-6" v-if="list.length">
            <CartItem 
                v-for="(item,index) in list" 
                :key="index" 
                :name="item.product_name"  
                :price="item.product_price"
                :src="item.product_thumb"
                :initialNum="item.num"
                :good_id="item.gid"
                :pid="item.pid"
                @delete="handleDelete(item)"
                @editSuccess="handleEditSuccess"
            />
          </ul>
          <div v-else>
              <NormalButton @click="$router.push({path:'/'})">快去逛逛吧～</NormalButton>
          </div>
          <div
            class="row align-items-end justify-content-between mb-10 mb-md-0"
          >
            <div cols="12" md="auto">
              <NormalButton :dark="false" @click="handleClean"> 清空购物车 </NormalButton>
              <NormalButton  @click="getCart"> 更新购物袋 </NormalButton>
            </div>
          </div>
        </b-col>
        <b-col :cols="12" :md="5" :lg="4">
            <div class="card mb-7 bg-light">
                <div class="card-body">
                    <ul class="list-group list-group-sm list-group-flush-y list-group-flush-x">
                        <li class="list-group-item d-flex">
                            <span>小计</span>
                            <span class="ml-auto font-size-sm">¥{{total.total_price}}</span>
                        </li>
                        <li class="list-group-item d-flex font-size-lg font-weight-bold">
                            <span>总计</span>
                            <span class="ml-auto font-size-sm">¥{{total.total_price}}</span>
                        </li>
                        <li class="list-group-item font-size-sm text-center text-gray-500"></li>
                    </ul>
                </div>
            </div>
            
            <NormalButton :block="true" @click="handleCheckout">去结算</NormalButton>
            <NormalButton @click="$router.push({path:'/'})">继续购物</NormalButton>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CartItem from "../comps/CartItem.vue";
import { mapState } from "vuex";
export default {
  components: {
    CartItem,
  },
  mounted: function () {
    this.getCart();
  },
  computed: {
    ...mapState("cart", {
      list: (state) => state.list,
      total: (state) => state.total,
    }),
  },
  methods: {
    getCart: function () {
      this.$store.dispatch("cart/cartList");
    },
    handleDelete(item){
        console.log("==handleDelete==",item)
        this.$store.dispatch("cart/deleteCart", { gid: item.gid,pid:item.pid });
    },
    handleClean(){
      this.$store.dispatch("cart/cleanCart");
    },
    getTotal(){
      this.$store.dispatch("cart/getTotal");
    },
    handleEditSuccess(){
      this.getTotal()
    },
    handleCheckout(){
      this.$store.dispatch("cart/shopCartBuy").then(res=>{
        if(res){
          this.$router.push("/checkout")
        }
      });
    }
  },
};
</script>

<style lang="scss" scoped>
</style>