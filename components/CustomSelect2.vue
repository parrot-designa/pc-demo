<template>
  <select class="custom-select custom-select-sm" @change="handleChange" v-model="value">
    <option v-for="(option,index) in options" :key="index" :value="option.value">{{option.name}}</option>
  </select>
</template>

<script>
export default {
    props:[
      'options','initialValue'
    ],
    data(){
      return {
        value:''
      }
    },
    methods:{
      handleChange:function(e){
        this.$emit("change",e.target.value) 
      }
    },
    watch:{
      initialValue:{
        handler:function(newval){
          this.value=newval.id
        },
        deep:true,
        immediate:true
      }
    }
};
</script>

<style lang="scss" scoped>
.custom-select{
    display: inline-block;
    width: 100%;
    height: calc(1.5em + 1.75rem + 2px);
    padding: 0.875rem 3.5rem 0.875rem 1.5rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #111;
    vertical-align: middle; 
    border: 1px solid #e5e5e5;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
.custom-select-sm {
    height: calc(1.5em + 1.625rem + 2px);
    padding-top: 0.8125rem;
    padding-bottom: 0.8125rem;
    padding-left: 1.25rem;
    font-size: .9375rem;
}
.custom-select {
    transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
</style>