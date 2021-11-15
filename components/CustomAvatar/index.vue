<template>
  <div class="custom-avatar custom-avatar-xxl" :class="classNameString">
    <span v-if="type === 'image'" class="card-img avatar-title rounded-circle">
      <div class="btn btn-xxs btn-block btn-dark card-btn">修改头像</div>
      <img :src="imgSrc" class="avatar-img rounded-circle" />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "image",
    },
    classNameString: {
      type: String,
      default: "",
    },
    imgSrc: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-avatar {
  position: relative;
  display: inline-block;
  width: 1.875rem;
  height: 1.875rem;
  font-size: 0.625rem;

  .avatar-title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    color: #ccc;
  }

  .avatar-img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }

  &.custom-avatar-xxl {
    width: 4rem;
    height: 4rem;
    font-size: 1.33333rem;
  }

  @media (min-width: 768px) {
    &.custom-avatar-xxl {
      width: 6.25rem;
      height: 6.25rem;
      font-size: 2.08333rem;
    }
  }
}
</style>