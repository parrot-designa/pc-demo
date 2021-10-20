<template>
  <div class="custom-mark">
    <sliding-validation
      :showSlidingValidation="true"
      @handleSlidingValidation="handleSlidingValidation"
    />
  </div>
</template>

<script>
import SlidingValidation from './SlidingValidation/src/SlidingValidation.vue';
export default {
  components: { SlidingValidation },
    methods:{
        handleSlidingValidation(e){
            console.log("e handleSlidingValidation",e)
            this.$emit('onClose',e)
        }
    }
};
</script>

<style scoped>
.custom-mark {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background:rgba(0,0,0,0.3);
  z-index: 1000;
  overflow: hidden;
}
</style>