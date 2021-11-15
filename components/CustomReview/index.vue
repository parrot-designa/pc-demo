<template>
  <div class="custom-review">
    <div class="custom-review-body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.custom-review {
  position: relative;
  padding-left: 2.5rem;

  & + .custom-review{
      margin-top: 1.25rem;
  }

  &:not(.review-child) {
    padding-right: 2.5rem;
    border: 1px solid #e5e5e5;
  }

  &-body {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
}
</style>