<template>
    <b-col 
        cols="2" 
        class="bg-cover py-12 card-img" 
        :style="{backgroundImage:`url(${imgSrc})`}"  
        :url="imgSrc" 
        @click="handleClick"
    >
        <b-row :data-index="externalIndex">
            <button class="btn btn-xs btn-block btn-dark card-btn" :data-index="externalIndex">查看</button>
        </b-row>
    </b-col>
</template>

<script>
export default {
    props:['imgSrc',"externalIndex"],
    methods:{
        handleClick(event){
            this.$emit('click',event)
        }
    }
}
</script>

<style scoped lang="scss">

</style>