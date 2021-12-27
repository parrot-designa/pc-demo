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
                    <CustomInputNumber v-model="num" :initialValue="initialNum" />

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
            num:1
        }
    },
    props:['name','price','src','initialNum','good_id',"pid"],
    watch:{
        initialNum:{
            handler:function(newVal){ 
                this.num=newVal;
            },
            immediate:true
        },
        num:{
            handler:function(newVal,oldVal){
                let numChange=newVal-oldVal;
                if(numChange>0){//增加
                    this.$store.dispatch("cart/editCart", { gid: this.good_id,num:newVal,pid:this.pid }).then(res=>{
                        if(res){this.$emit("editSuccess")}
                    });
                }else{//减少
                    this.$store.dispatch("cart/editCart", { gid: this.good_id,num:newVal,pid:this.pid }).then(res=>{
                        if(res){this.$emit("editSuccess")}
                    });
                } 
            },
            immediate:true
        }
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