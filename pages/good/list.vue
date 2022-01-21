<template>
  <div>
    <Input />

    <b-container>
      <b-row class="pt-8 m-3">
        <b-col :cols="6" :lg="4" v-for="(item,index) in dataSource" :key="index">
          <GoodItem
            class="mb-7"
            :backSrc="item.goods_thumb"
            :frontSrc="item.goods_thumb"
            :goodName="item.goods_name"
            :price="item.shop_price"
          />
        </b-col> 
      </b-row>
    </b-container>

    <CustomPagination />
  </div>
</template>

<script>
import Input from "./coms/Input.vue";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    Input,
  },
   computed: {
    ...mapState("good", {
      dataSource: (state) => state.dataSource 
    }), 
  },
  methods:{
      getGoodList:function(params){
        this.$store.dispatch("good/getGoodsList",params); 
      }
  },
  mounted: async function () { 
    this.getGoodList();
  },
};
</script>

<style  lang="scss" scoped>
</style>