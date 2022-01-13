<template>
  <select class="custom-select custom-select-sm">
    <option v-for="(option,index) in options" :key="index" :value="option.value">{{option.name}}</option>
  </select>
</template>

<script>
export default {
    props:[
        'options'
    ]
};
</script>

<style lang="scss" scoped>
</style>