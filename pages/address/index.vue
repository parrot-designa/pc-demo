<template>
  <b-container class="page-address">
    <PageTop title="填写收货地址" subtitle="如需帮助请联系客服人员" />
    <section class="pt-7 pb-5">
      <b-row>
        <b-col
          cols="12"
          md="7"
          v-for="(item, index) in addressList"
          :key="index"
        >
          <Form :info="item" @delete="handleDelete" @edit="handleEdit" @changeDefault="changeDefault" />
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
import AddressSelect from "~/components/AddressSelect.vue";
import Form from "./comps/form.vue";
import { mapState } from "vuex";
export default {
  components: { AddressSelect, Form },
  data() {
    return {
      current: {},
    };
  },
  mounted: function () {
    this.getMyAddress();
  },
  computed: {
    ...mapState("address", {
      addressList: (state) => state.list,
    }),
  },
  methods: {
    getMyAddress: function () {
      this.$store.dispatch("address/getMyList");
    },
    handleDelete: function (item) {
      let res = confirm("您确定要删除该收货人信息吗？");
      if (res) {
        this.$store.dispatch("address/delete", item.id).then((res) => {
          if (res) {
            this.$message.success("删除成功！");
            this.getMyAddress();
          }
        });
      }
    },
    handleEdit: function (form) {
      if (!form.consignee) {
        this.$message.warning("收货人姓名必填");
        return;
      }
      if (!form.mobile) {
        this.$message.warning("手机号必填");
        return;
      }
      if (!form.email) {
        this.$message.warning("电子邮箱必填");
        return;
      }
      if (!form.addressCode[2]) {
        this.$message.warning("电子邮箱必填");
        return;
      }
      if (!form.address) {
        this.$message.warning("详细地址必填");
        return;
      }
      this.$store
        .dispatch("address/edit", {
          province: form.addressCode[0],
          city: form.addressCode[1],
          district: form.addressCode[2],
          address: form.address,
          consignee: form.consignee,
          mobile: form.mobile,
          email: form.email,
          address_id: form.id,
        })
        .then((res) => {
          if (res) {
            this.$message.success("修改成功！");
            this.getMyAddress();
          }
        });
    },
    changeDefault:function(form){
       if (!form.consignee) {
        this.$message.warning("收货人姓名必填");
        return;
      }
      if (!form.mobile) {
        this.$message.warning("手机号必填");
        return;
      }
      if (!form.email) {
        this.$message.warning("电子邮箱必填");
        return;
      }
      if (!form.addressCode[2]) {
        this.$message.warning("电子邮箱必填");
        return;
      }
      if (!form.address) {
        this.$message.warning("详细地址必填");
        return;
      }
      this.$store
        .dispatch("address/edit", {
          province: form.addressCode[0],
          city: form.addressCode[1],
          district: form.addressCode[2],
          address: form.address,
          consignee: form.consignee,
          mobile: form.mobile,
          email: form.email,
          address_id: form.id,
          is_default:1
        })
        .then((res) => {
          if (res) {
            this.$message.success("添加成功！");
            this.getMyAddress();
            this.$router.go(-1)
          }
        });
    },
    handleAdd: function (form) {
      if (!form.consignee) {
        this.$message.warning("收货人姓名必填");
        return;
      }
      if (!form.mobile) {
        this.$message.warning("手机号必填");
        return;
      }
      if (!form.email) {
        this.$message.warning("电子邮箱必填");
        return;
      }
      if (!form.addressCode[2]) {
        this.$message.warning("电子邮箱必填");
        return;
      }
      if (!form.address) {
        this.$message.warning("详细地址必填");
        return;
      }
      this.$store
        .dispatch("address/add", {
          province: form.addressCode[0],
          city: form.addressCode[1],
          district: form.addressCode[2],
          address: form.address,
          consignee: form.consignee,
          mobile: form.mobile,
          email: form.email,
        })
        .then((res) => {
          if (res) {
            this.$message.success("添加成功！");
            this.getMyAddress();
          }
        });
    },
  },
};
</script>