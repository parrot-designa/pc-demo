<template>
    <div class="btn-group-toggle">
        <label 
            class="btn btn-sm btn-outline-border mr-1"  
            :class="{'active':cdx===index}"
            v-for="(item,index) in options" 
            :key="index"
        >{{item.name}}</label>
    </div>
</template>


<script>
export default {
    data(){
        return {
            cdx:0
        }
    },
    props:{
        options:{
            type:Array,
            default:[]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>