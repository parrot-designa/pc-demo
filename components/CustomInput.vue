<template>
  <input
    class="custom-form-input form-control-gray-700"
    :class="{ [`input-${size}`]: size }"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["size", "dark", "type", "gray","placeholder"],
};
</script>

<style lang="scss" scoped>
.custom-form-input {
  display: block;
  width: 100%;
  height: calc(1.5em + 1.75rem + 2px);
  padding: 0.875rem 1.5rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #111;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  background-clip: border-box;
  transition: all 0.1s ease-in-out;
  transition-property: border;
  outline: none;

  &.input-lg {
    height: calc(1.5em + 2.125rem + 2px);
    padding: 1.0625rem 1.875rem;
    font-size: 1rem;
    line-height: 1.5;
  }
}
</style>