<template>
  <el-popover
    placement="bottom"  
    trigger="hover" 
    :visible-arrow="false"
    popper-class="popoverClass"  
    :width="width"
  > 
    <slot slot="reference" />
    <div class="">
      <div v-for="(item,index) in items" :key="index" class="font-size-sm py-2 text-center">{{item.label}}</div>
    </div>
  </el-popover>
 

</template>

<script>
export default {
  data(){
    return {
      visible:false,
    }
  },
  props:{
    items:{
      default:[],
      type:Array
    },
    width:{
      default:160,
      type:[Number,String]
    }
  }
};
</script>

<style lang="scss" scoped>
.popoverClass{

}
</style>