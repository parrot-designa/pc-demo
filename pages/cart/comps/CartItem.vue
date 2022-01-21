<template>
  <li class="list-group-item">
    <b-row align-h="center">
      <b-col cols="3">
        <img :src="src" class="img-fluid" />
      </b-col>
      <b-col>
        <div class="d-flex mb-2 font-weight-bold">
          <div class="text-body">{{ name }}</div>
          <span class="ml-auto">￥{{ price }}</span>
        </div>
        <p class="mb-7 font-size-sm text-muted">
          <br />
        </p>
        <div class="d-flex align-items-center">
          <InputNumber v-model="inner_num" />

          <NormalButton @click="handleDelete">删除</NormalButton>
        </div>
      </b-col>
    </b-row>
  </li>
</template>

<script>
export default {
  data() {
    return {
      inner_num: 1,
    };
  },
  props: ["name", "price", "src", "num", "gid", "pid"],
  watch: {
    num: {
      handler: function (val) {
        this.inner_num = val;
      },
      immediate: true,
    },
    inner_num: {
      handler: function (val) {
        this.$emit("onEdit", {
          gid: this.gid,
          pid: this.pid,
          num: val,
        }); 
      },
    },
  },
  methods: {
    handleDelete: function () {
      this.$emit("onDelete",{
          gid:this.gid,
          pid:this.pid
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>