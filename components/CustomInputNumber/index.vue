<template>
  <div class="form-control form-control-sm number-goods" :class="className">
    <input type="number" class="number-goods i" v-model="value" @input="handleInput" :min="min" />
    <a class="number-goods r" @click="()=>value++">+</a>
    <a class="number-goods l" @click="handleReduce">-</a>
  </div>
</template>

<script>
export default {
  props: {
    className:{
      type:String,
      default:''
    },
    min:{
      type:Number,
      default:1
    },
    initialValue:{
      type:Number,
    }
  },
  data(){
    return {
      value:1
    }
  },
  watch:{
    value:{
      handler:function(newVal){ 
        this.$emit('input',newVal);
      },
      immediate:true
    },
    initialValue:{
      handler:function(newVal){ 
        this.value=newVal;
      },
      immediate:true
    }
  },
  methods:{
    handleInput:function(val){ 
    },
    handleReduce:function(){
      if(this.value<=1) return ;
      this.value--;
    }
  }
};
</script>

<style lang="scss" scoped>
.number-goods {
  position: relative;

  .i {
    float: left;
    width: 2.5rem;
    border: 0;
    display: block;
    outline: none;
    padding: 0;
  }
  .l {
    float: left;
    bottom: -1px;
    width: 1rem;
    text-align: center;
    height: 1.7rem;
    overflow: hidden;
    background: #f1f1f1;
    color: #000;
    position: absolute;
    right: -1px;
    border: 1px solid #ccc;
  }
  .r {
    float: left;
    top: -1px;
    display: block;
    width: 1rem;
    text-align: center;
    height: 1.7rem;
    overflow: hidden;
    background: #f1f1f1;
    color: #666;
    position: absolute;
    right: -1px;
    border: 1px solid #ccc;
  }
}
</style>