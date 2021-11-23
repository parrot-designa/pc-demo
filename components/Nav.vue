<template>
  <b-navbar toggleable="xl">
    <b-container>
      <b-navbar-brand tag="a" class="d-xl-none">CHHES</b-navbar-brand>
      <b-navbar-toggle target="navbarClassicCollapse"></b-navbar-toggle>
      <b-collapse is-nav id="navbarClassicCollapse">
        <b-navbar-nav>
          <b-nav-item v-for="(item, index) in globalNavigation" :key="index">
            <CustomPopover :items="item.children" v-if="childLength(item.children)">
              <span>{{ getHeader(item) }}</span>
            </CustomPopover>
            <span v-else>{{ getHeader(item) }}</span>
          </b-nav-item>
        </b-navbar-nav>
        <a
          class="navbar-brand mx-auto d-none d-xl-block pr-12"
          href="./index.html"
        >
          CHHES
        </a>
        <b-navbar-nav>
          <b-nav-item href="#" class="text-body" @click="$router.push({path:'/login'})">{{
            useInfo.user_name||useInfo.phone||$t("userLogin.navbar.loginText")
          }}</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
            <div class="iconfont icon-sousuo"></div>
          </b-nav-item>
          <b-nav-item href="#">
            <div class="iconfont icon-yonghu" @click="$router.push({path:'/user'})"></div>
          </b-nav-item>
          <b-nav-item href="#">
            <div class="iconfont icon-aixin"></div>
          </b-nav-item>
          <b-nav-item href="#">
            <custom-badge :text="0">
              <div class="iconfont icon-gouwuche"></div>
            </custom-badge>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import { transformLanguage } from "../utils/i18n";
import MenuItemOne from "./comps/MenuItemOne.vue";
export default {
  data() {
    return {};
  },
  props: ["bgColor", "globalNavigation","useInfo"],
  components: {
    MenuItemOne,
  },
  watch: {  
  },
  methods: {
    childLength:function(children){
      return (children||[]).length;
    },
    transformLanguage,
    handleSwitchChinese: function () {
      this.$store.commit("SET_LANG", "zh-CN");
      this.$i18n.locale = "zh-CN";
    },
    handleSwitchEnglish: function () {
      this.$store.commit("SET_LANG", "en-US");
      this.$i18n.locale = "en-US";
    },
    getHeader: function (item) { 
      if (item.label === "首页") {
        return this.$t("userLogin.navbar.home");
      } else if (item.label === "饰品") {
        return this.$t("userLogin.navbar.tasted");
      }
    },
  },
};
</script>

<style lang="scss">
</style>