<template>
  <b-button
    tag="a"
    class="
      custom_view_button custom_view_button-link
      stretched-link
      px-0
      text-white text-shadow
    "
  >
    {{ title }}
    <i class="iconfont icon-youjiantou ml-2"></i>
  </b-button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "点击查看",
    },
  },
};
</script>

<style lang="scss" scoped>
.custom_view_button {
  height: calc(1.5rem + 1.75rem + 2px);
  white-space: nowrap;
  background: transparent;
  border-color:transparent;

  &:hover{
    .icon-youjiantou{
      transform: translateX(.25rem);
    }
  }

  &.custom_view_button_link {
    font-weight: 500;
    color: #111;
    text-decoration: none;
  }
  .icon-youjiantou{
    transition: all .2s ease-in-out;
    transition-property: transform;
    display: inline-block;
  }
}
</style>