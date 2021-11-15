<template>
  <div
    class="custom_line_button link-underline text-reset mx-4 my-4 text-shadow"
    @click="handleClickImg"
  >
    {{ title }}
  </div>
</template>

<script>
export default {
  props: ["title"],
  methods:{
    handleClickImg(){
      this.$emit('click')
    }
  }
};
</script>

<style lang="scss" scoped>
.custom_line_button {
  display: inline-block;

}
</style>