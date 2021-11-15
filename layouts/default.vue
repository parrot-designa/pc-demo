<template>
  <div :style="{ 'background-color': bgColor }">
    <TopNav />
    <Nav :globalNavigation="globalNavigation" />
    <CustomBreadcrumb :items="breadItems" v-if="breadItems.length" />
      <nuxt />
    <Footer 
      :globalFooterMsg="globalFooterMsg"
      :getFriendLink="getFriendLink"
      :getHelpMsg="getHelpMsg"
    />
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';

export default {
  mounted(){
    this.$store.dispatch('global/getNavgation')
    this.$store.dispatch('global/getFooter')
    this.$store.dispatch('global/getFriendLink')
    this.$store.dispatch('global/getHelpCenter')
  },
  computed:{
    ...mapState('global',{
      bgColor:state=>state.globalHeaderBgColor,
      breadItems:state=>state.globalBreadItems,
      globalNavigation:state=>state.globalNavigation,
      globalFooterMsg:state=>state.globalFooterMsg,
      getFriendLink:state=>state.getFriendLink,
      getHelpMsg:state=>state.getHelpMsg
    })
  } 
};
</script>