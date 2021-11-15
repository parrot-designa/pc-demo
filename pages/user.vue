<template>
  <section class="pt-7 pb-12">
    <b-container>
      <b-row>
        <b-col cols="12" class="text-center">
          <h3 class="mb-10">用户中心</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="3">
          <nav class="mb-10 mb-md-0">
            <div
              class="
                list-group list-group-sm list-group-strong list-group-flush-x
              "
            >
              <div
                v-for="(menu, index) in menusData"
                :key="index"
                class="
                  list-group-item list-group-item-action
                  dropright-toggle
                  d-flex
                  justify-content-space-between
                "
                :class="{active:activePath(menu)}"
                @click="handleNavigation(menu)"
              >
                <div class="iconfont mr-2 ml-1" :class="menu.icon"></div>
                <div class="text">{{ menu.name }}</div>
                <i class="iconfont icon-youjiantou1 font-size-xxs right"></i>
              </div>
            </div>
          </nav>
        </b-col>
        <b-col cols="12" md="9" lg="8" offset-lg="1">
          <nuxt-child />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      menusData: [
        { name: "用户首页", path: "/", icon: "icon-shouye" },
        {
          name: "我的订单",
          path: "/myorder",
          icon: "icon-dingdandingdanmingxishouzhimingxi-xianxing",
        },
        { name: "心愿单", path: "/favorite", icon: "icon-aixin1" },
        {
          name: "缺货登记",
          path: "/stockregistration",
          icon: "icon-dengjizongshu",
        },
        { name: "评价晒单", path: "/evaluation", icon: "icon-pingjiaguanli" },
        { name: "我的留言", path: "/message", icon: "icon-xinfeng" },
        { name: "优惠券", path: "/coupons", icon: "icon-youhuiquan" },
        { name: "账户设置", path: "/account", icon: "icon-yonghushezhi" },
        { name: "收货地址", path: "/address", icon: "icon-shouhuodizhi" },
        { name: "余额管理", path: "/balance", icon: "icon-yue" },
        {
          name: "闲置区商品列表",
          path: "/idlegoods",
          icon: "icon-fenxiaoshangpinliebiao",
        },
        {
          name: "闲置区订单列表",
          path: "/idleorders",
          icon: "icon-danlieliebiao",
        },
        { name: "安全退出", path: "/exit", icon: "icon-anquantuichu" },
      ],
    };
  },
  asyncData(context) {
    console.log("--asyncData--", context);
  },
  computed: {
    ...mapState("global", {
      path: (state) => state.globalPath
    }),
  },
  methods:{
      activePath({name}){
          console.log("--name--",name,this.path)
          if(this.path==='/user' && name==='用户首页'){
              return true;
          }
          if(this.path==='/user/myorder' && name==='我的订单'){
              return true;
          }
          if(this.path==='/user/favorite' && name==='心愿单'){
              return true;
          }
          if(this.path==='/user/stockregistration' && name==='缺货登记'){
              return true;
          }
          if(this.path==='/user/evaluation' && name==='评价晒单'){
              return true;
          }
          if(this.path==='/user/message' && name==='我的留言'){
              return true;
          }
          if(this.path==='/user/coupons' && name==='优惠券'){
              return true;
          }
          if(this.path==='/user/account' && name==='账户设置'){
              return true;
          }
          if(this.path==='/user/address' && name==='收货地址'){
              return true;
          }
          if(this.path==='/user/balance' && name==='余额管理'){
              return true;
          }
          return false;
      },
      handleNavigation({path}){
          this.$router.push({
              path:`/user${path}`
          })
      }
  }

};
</script>

<style lang="scss" scoped>
.right {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}
</style>