<template>
    <li class="list-group-item">
        <b-row align-h="center">
            <b-col cols="3">
                <img :src="src" class="img-fluid" />
            </b-col>
            <b-col>
                <div class="d-flex mb-2 font-weight-bold">
                    <div class="text-body">{{name}}</div>
                    <span class="ml-auto">￥{{price}}</span>
                </div>
                <p class="mb-7 font-size-sm text-muted">
                    <br />
                </p>
                <div class="d-flex align-items-center">
                    <CustomInputNumber v-model="inner_num"  />

                    <NormalButton @click="handleDelete">删除</NormalButton>
                </div>
            </b-col>
        </b-row>
    </li>
</template>

<script>
export default {
    data(){
        return {
            inner_num:1
        }
    },
    props:['name','price','src','num','good_id',"pid"],
    watch:{ 
    },
    methods:{
        handleDelete:function(){
            this.$emit("delete")
        }
    }
}
</script>

<style lang="scss" scoped>

</style>