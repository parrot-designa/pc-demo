<template>
    <div class="nav justify-content-center mb-10">
        <a 
            class="nav-link" 
            v-for="(item,index) in tabs" 
            :key="index"
            :class="{'active':value===index}"
            @click="handleClick(index)"
        >{{item.label}}</a>
    </div>
</template>

<script> 
export default {
    props:{
        tabs:{
            type:Array,
            default:[]
        },
        value:{
            type:Number,
            default:0
        },
        pageType:{
            type:String,
            default:'index'
        }
    },
    methods:{
        handleClick:function(index){
            this.$emit("input",index)
        }
    }
}
</script>

<style lang="scss" scoped>
.is-active{

}
</style>