<template>
    <div class="nav" :class="classname">
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
        },
        classname:{
            type:String,
            default:''
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