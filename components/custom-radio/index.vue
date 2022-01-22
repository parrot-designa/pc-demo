
<template>
    <div class="custom-control custom-radio"  @click="handleSelect">
        <input 
            class="custom-control-input" 
            type="radio" 
            :checked="checked" 
        />
        <label class="custom-control-label" :class="[{'checked':checked}]">
            <b>{{label}}</b>
            <span class="ml-5 font-size-xs">{{text}}</span>
        </label>
    </div>
</template>

<script>
export default {
    name:'CustomRadio',
    props:{
        label:{
            type:String,
            default:''
        },
        text:{
            type:String,
            default:''
        },
        checked:{
            type:Boolean,
        }
    },
    methods:{
        handleSelect:function(){
            this.$emit("click");
        }
    }
}
</script>

<style lang="scss" scoped>

</style>