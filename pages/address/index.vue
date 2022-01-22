<template>
  <b-container class="page-address">
    <PageTop title="填写收货地址" subtitle="如需帮助请联系客服人员" />
    <section class="pt-7 pb-5">
      <b-row>
        <b-col
          cols="12"
          md="7"
          v-for="(item, index) in addressList.slice(0, 5)"
          :key="index"
        >
          <Form
            :info="item"
            @delete="handleDelete"
            @edit="handleEdit"
            @changeDefault="changeDefault"
          />
        </b-col>
        <b-col cols="12" md="7">
          <Form
            :info="current"
            :canDelete="false"
            :canEdit="false"
            :canAdd="true"
            :canConfirm="false"
            @add="handleAdd"
          />
        </b-col>
      </b-row>
    </section>
  </b-container>
</template>

<script>
import Form from "./comps/form.vue";
export default {
  components: { Form },
  data() {
    return {
      current: {},
      addressList: [],
    };
  },
  mounted: function () {
    this.getAddressList();
  },
  computed: {},
  methods: {
    getAddressList: async function () {
      const res = await this.$api.address.list();
      this.addressList = res.data;
    },
    handleDelete: async function (item) {
      let confirm_res = confirm("您确定要删除该收货人信息吗？");
      if (confirm_res) {
        const res = await this.$api.address.deleteItem({ address_id: item.id });
        if (res.errcode === 0) {
          this.$toast.success("删除成功！");
          this.getAddressList();
        }
      }
    },
    handleEdit: async function (form) { 
      if (!form.consignee) {
        return this.$toast.error("收货人姓名必填"); 
      }
      if (!form.mobile) {
        return this.$toast.error("手机号必填"); 
      }
      if (!form.email) {
        return this.$toast.error("电子邮箱必填"); 
      }
      if (!form.addressCode[2]) {
        this.$toast.error("电子邮箱必填");
        return;
      }
      if (!form.address) {
        return this.$toast.error("详细地址必填");
      }
      const res = this.$api.address.edit({
        province: form.addressCode[0],
        city: form.addressCode[1],
        district: form.addressCode[2],
        address: form.address,
        consignee: form.consignee,
        mobile: form.mobile,
        email: form.email,
        address_id: form.id,
      });
      if (res.errcode === 0) {
        this.$toast.success("修改成功！");
        this.getAddressList();
      }
    },
    changeDefault: async function (form) { 
      if (!form.consignee) {
        return this.$toast.error("收货人姓名必填"); 
      }
      if (!form.mobile) {
        return this.$toast.error("手机号必填"); 
      }
      if (!form.email) {
        return this.$toast.error("电子邮箱必填"); 
      }
      if (!form.addressCode[2]) {
        return this.$toast.error("电子邮箱必填"); 
      }
      if (!form.address) {
        return this.$toast.error("详细地址必填"); 
      }
      const res = await this.$api.address.edit({
        province: form.addressCode[0],
        city: form.addressCode[1],
        district: form.addressCode[2],
        address: form.address,
        consignee: form.consignee,
        mobile: form.mobile,
        email: form.email,
        address_id: form.id,
        zipcode:'110',
        is_default: 1,
      });
      if (res.errcode === 0) {
        this.$toast.success("修改默认地址成功！");
        this.$router.go(-1);
      }
    },
    handleAdd: async function (form) {
      if (!form.consignee) {
        return this.$toast.show("收货人姓名必填");
      }
      if (!form.mobile) {
        return this.$toast.show("手机号必填");
      }
      if (!form.email) {
        return this.$toast.show("电子邮箱必填");
      }
      if (!form.addressCode[2]) {
        return this.$toast.show("电子邮箱必填");
      }
      if (!form.address) {
        return this.$toast.show("详细地址必填");
      }
      const res = await this.$api.address.add({
        province: form.addressCode[0],
        city: form.addressCode[1],
        district: form.addressCode[2],
        address: form.address,
        consignee: form.consignee,
        mobile: form.mobile,
        email: form.email,
        zipcode:'110',
      }); 
    },
  },
};
</script>