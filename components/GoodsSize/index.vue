<template>
  <div class="mb-2">
    <div
      class="custom-control custom-control-inline mb-2"
      :class="[{ selected: currentIdx === i }]"
      v-for="(item, i) in sizeData"
      :key="i"
      @click="selectItrem(i)"
    >
      <span> {{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sizeData: {
      type: Array,
      default: () => {
        return ["S", "M", "L", "XL", "XXL"];
      }
    }
  },
  data() {
    return {
      currentIdx: 0
    };
  },
  methods: {
    selectItrem(i) {
      this.currentIdx = i;
    }
  }
};
</script>

<style lang="scss" scoped>
.custom-control {
  min-width: 3rem;
  padding: 0.5rem;
  text-align: center;
  border: 1px solid #ddd;
  display: inline-block;
}
.custom-control-inline {
  margin-right: 8px;
}
.selected {
  border: 1px solid #000;
}
</style>
