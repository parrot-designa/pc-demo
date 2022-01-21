<template>
  <div class="tab-pane fade" :class="[{ active: active, show: delayActive }]">
    <slot />
  </div>
</template>


<script>
export default {
  name: "TabPane",
  data() {
    return {
      delayActive: false,
    };
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    active: {
      handler: function (newVal) {
        if (newVal) {
          setTimeout(() => {
            this.delayActive = true;
          }, 0);
        } else {
          this.delayActive = false;
        }
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
</style>
