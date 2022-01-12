<template>
  <div class="mb-2 spec-item">
    <div class="name">{{ attrName }}</div>
    <div class="content">
      <div
        class="custom-control custom-control-inline"
        :class="[{ selected: currentIdx === i }]"
        v-for="(item, i) in dataSource"
        :key="i"
        @click="selectItrem(item,i)"
      >
        <span> {{ item.attr_value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataSource: {
      type: Array,
      default: () => {
        return [];
      },
    },
    attrName: {
      type: String,
      default: () => {
        return "属性";
      },
    },
  },
  data() {
    return {
      currentIdx: 0,
    };
  },
  methods: {
    selectItrem(item,index) {
      this.currentIdx = index;
    },
  },
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
}
.selected {
  border: 1px solid #000;
}
.spec-item { 
  display: flex;
  align-items: center;
  .name{
    flex-basis: 80px;
    width:80px;
    flex-shrink: 0;
    flex-grow: 0;
  }
  .content{
    flex:1;
    display: flex;
    align-items: center;

  }
}
</style>
