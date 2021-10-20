<template>
  <b-navbar toggleable="xl" class="navbar-topbar">
    <b-container>
      <div class="mr-xl-8">
        <span class="iconfont icon-wuliuqiache mr-2"></span>
        <span class="heading-xxxs">Free shipping worldwide</span>
      </div>
      <b-navbar-toggle target="navbarClassicCollapse"></b-navbar-toggle>
      <b-collapse is-nav id="navbarClassicCollapse">
        <b-nav class='mr-auto'>
          <b-nav-item-dropdown
            id="my-nav-dropdown"
            :text="transformLanguage($store.state.locale,$t('userLogin.language'))"
          >
            <b-dropdown-item @click="handleSwitchChinese">{{ $t('userLogin.language.chinese') }}</b-dropdown-item>
            <b-dropdown-item @click="handleSwitchEnglish">{{ $t('userLogin.language.english') }}</b-dropdown-item>
          </b-nav-item-dropdown>
           <b-nav-item-dropdown id="my-nav-dropdown" text="USD">
            <b-dropdown-item>USD</b-dropdown-item>
            <b-dropdown-item>EUR</b-dropdown-item>
          </b-nav-item-dropdown>
           <b-nav-item-dropdown id="my-nav-dropdown" text="English">
            <b-dropdown-item>English</b-dropdown-item>
            <b-dropdown-item>French</b-dropdown-item>
            <b-dropdown-item>German</b-dropdown-item> 
          </b-nav-item-dropdown>
        </b-nav> 
        <b-nav class='mr-8'>
            <b-nav-item>Shipping</b-nav-item>
            <b-nav-item>FAQ</b-nav-item>
            <b-nav-item>Contact</b-nav-item>
        </b-nav>
        <b-nav>
            <b-nav-item><span class='iconfont icon-facebook'></span></b-nav-item>
            <b-nav-item><span class='iconfont icon-twitter'></span></b-nav-item>
            <b-nav-item><span class='iconfont icon-instagram'></span></b-nav-item>
            <b-nav-item><span class='iconfont icon-medium-square-fill'></span></b-nav-item>
        </b-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import { transformLanguage } from "../utils/i18n";
export default {
  data() {
    return {};
  },
  methods: {
    transformLanguage,
    handleSwitchChinese: function () {
      console.log("handleSwitchChinese");
      this.$store.commit("SET_LANG", "zh-CN");
      this.$i18n.locale = "zh-CN";
    },
    handleSwitchEnglish: function () {
      console.log("handleSwitchEnglish");
      this.$store.commit("SET_LANG", "en-US");
      this.$i18n.locale = "en-US";
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar-topbar {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.875rem;
  background-color: #f5f5f5 !important;
}
</style>