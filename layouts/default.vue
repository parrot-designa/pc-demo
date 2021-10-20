<template>
  <div>
    <Nav :bgColor="bgColor" />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
export default {
  computed:{
    ...mapState('global',{
      bgColor:state=>state.globalHeaderBgColor
    })
  } 
};
</script>