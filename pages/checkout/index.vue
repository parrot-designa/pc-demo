<template>
  <b-container class="page-checkout">
    <PageTop
      title="订单确认支付"
      subtitle="请核对您的收货地址和帐单地址，然后点击“确认并下单”"
    />
    <b-row>
      <b-col cols="12" md="7">
        <CheckoutConsignee :info="defaultAddress" @edit="handleEditAddress" />
        <CheckoutTable
          :dataSource="shipList"
          title="配送方式"
          v-model="shipValue"
          keyField="shipping_code"
        />
        <CheckoutTable
          :dataSource="payTypeList"
          title="支付方式"
          v-model="payValue"
          keyField="code"
        />
        <CheckoutTextarea />
      </b-col>
      <b-col cols="12" md="5" lg="4" offset-lg="1">
        <GoodData :data="cartGoods" />

        <NormalButton :dark="true" @click="handleConfirm"
          >确认并下单</NormalButton
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CheckoutConsignee from "./comps/CheckoutConsignee.vue";
import CheckoutTable from "./comps/table.vue";
import CheckoutTable2 from "./comps/table2.vue";
import CheckoutTextarea from "./comps/textarea.vue";
import GoodData from "./comps/goodData.vue";
import { getGoodsInfo, getPackList } from "@/server/checkout";

export default {
  data() {
    return {
      shipValue: "",
      payValue: "",
      shipList: [],
      goodInfo: {},
      packList: [],
      defaultAddress: {},
      payTypeList: [],
      cartGoods: [],
    };
  },
  components: {
    CheckoutConsignee,
    CheckoutTable,
    CheckoutTable2,
    CheckoutTextarea,
    GoodData,
  },
  computed: {},
  mounted: function () {
    this.getCheckoutInfo();
    // this.getPayTypeList();
  },
  watch: {},
  methods: {
    handleEditAddress: function () {
      this.$router.push("/address");
    },
    getCheckoutInfo: async function () {
      const { data } = await this.$api.checkout.checkout();
      this.defaultAddress =
        data.address_list.find((item) => item.is_default === 1) || {};
      if (!this.defaultAddress.id) {
        this.$toast.error("没有地址，需要添加地址！");
        this.handleEditAddress();
        return;
      }
      this.cartGoods = data.cart_goods;
      const shipListRes = await this.$api.checkout.shipList({
        country: 1,
        province: this.defaultAddress.province,
        city: this.defaultAddress.city,
        district: this.defaultAddress.district,
      });
      this.shipList = shipListRes.data.map((item) => ({
        ...item,
        text: item.shipping_desc,
        label: item.shipping_name,
      }));
      this.shipValue = this.shipList[0].shipping_code;
      const res = await this.$api.checkout.payTypeList({ client: "pc" });
      this.payTypeList = res.data.map((item) => ({
        ...item,
        text: item.shipping_desc,
        label: item.name,
      }));
      this.payValue = this.payTypeList[0].code;
      this.getTotal();
    },  
    getTotal: async function () { 
      await this.$api.checkout.total_amount({
        address_id: this.defaultAddress.id,
        shipping_code: this.shipValue,
        payment_code: this.payValue,
      });
    },
    handleConfirm: function () {
      this.$store.dispatch("order/createOrder").then((res) => {
        if (res.errcode !== 0) {
          this.$message.warning(res.errmsg);
        } else {
          this.$router.push("/checkout/success");
        }
      });
    },
  },
};
</script>