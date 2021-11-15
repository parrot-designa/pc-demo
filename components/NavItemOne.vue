<!-- 首页footer中导航栏1 -->
<template>
  <b-col cols="6" sm>
    <h6 class="heading-xxs mb-4 text-white">
      <a :title="title">{{ title }}</a>
    </h6>
    <ul class="list-unstyled mb-7 mb-sm-0">
      <li v-for="(item, index) in data" :key="index">
        <a :href="data.link" class="text-gray-300" :title="item.name">{{
          item.title
        }}</a>
      </li>
    </ul>
  </b-col>
</template>

<script>
export default {
  props: ["title", "data"],
  mounted:function(){ 
  }
};
</script>

<style>
</style>


