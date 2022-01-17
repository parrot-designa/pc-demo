<template>
  <div class="form-control form-control-sm number-goods" :class="className">
    <input type="number" class="number-goods i" v-model="val" :min="min" />
    <a class="number-goods r" @click="()=>val++">+</a>
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
    value:{
      type:Number 
    }
  },
  data(){
    return {
      val:1,
      time:0
    }
  },
  watch:{
    val:{
      handler:function(newVal,oldVal){ 
        console.log("===val===>",newVal)
        this.$emit('input',newVal,oldVal);
      }
    }, 
    value:{
      handler:function(newval){  
        if(this.time===0){
          this.val= newval;
          this.time++;
        }
      },
      immediate:true
    } 
  },
  methods:{
    handleInput:function(val){ 
    },
    handleReduce:function(){
      if(this.val<=1) return ;
      this.val--;
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