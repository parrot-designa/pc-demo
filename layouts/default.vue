<template>
  <div :style="{ 'background-color': bgColor }">
    <TopNav />
    <Nav :globalNavigation="globalNavigation" :useInfo="useInfo"/>
    <CustomBreadcrumb :items="breadItems" v-if="breadItems.length" />
      <nuxt :query="query" />
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
    this.$store.dispatch('user/getInfo')
  },
  computed:{
    ...mapState('global',{
      bgColor:state=>state.globalHeaderBgColor,
      breadItems:state=>state.globalBreadItems,
      globalNavigation:state=>state.globalNavigation,
      globalFooterMsg:state=>state.globalFooterMsg,
      getFriendLink:state=>state.getFriendLink,
      getHelpMsg:state=>state.getHelpMsg,
      path: (state) => state.globalPath,
      query:(state)=> state.globalQuery
    }),
    ...mapState('user',{
      useInfo:state=>state.info
    }) 
  } 
};
</script>