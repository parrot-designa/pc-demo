<template>
  <div>
    <b-row class="border-top pt-8">
      <b-col cols="12" md="6">
        <FormItem title="收货人姓名" :required="true" v-model="form.consignee" :initialValue="form.consignee" />
      </b-col>
      <b-col cols="12" md="6">
        <FormItem title="手机号" :required="true"  v-model="form.mobile" :initialValue="form.mobile"/>
      </b-col>
      <b-col cols="12" md="6">
        <FormItem title="电子邮箱" :required="true" v-model="form.email"  :initialValue="form.email" />
      </b-col>
    </b-row>
    <b-row class="mb-5">
      <b-col cols="12">
        <FormItem title="配送区域" :required="true" type="addressList"  @change="handleAddressChange" :initialCode="form.addressCode" />
      </b-col>
      <b-col cols="12" class="mb-6">
        <FormItem title="详细地址" :required="true" v-model="form.address"  :initialValue="form.address" />
      </b-col>
    </b-row>
    <b-row class="mb-5">
      <b-col cols="12">
        <NormalButton v-if="canEdit" @click="handleEdit">确认修改</NormalButton>
        <NormalButton v-if="canAdd" @click="handleAdd">添加</NormalButton>
        <NormalButton v-if="canConfirm" @click="handleChangeDefault">配送至这个地址</NormalButton>
        <NormalButton :dark="false" class="ml-2" @click="$emit('delete',info)" v-if="canDelete">删除</NormalButton>
      </b-col>
    </b-row>
  </div>
</template>

<script> 
export default {
    data(){
        return {
            form:{
                consignee:"",
                mobile:"",
                email:"",
                address:"",
                addressCode:[]
            }
        }
    },
    props:{
        info:{
            type:Object
        },
        canDelete:{
            type:Boolean,
            default:true
        },
        canEdit:{
            type:Boolean,
            default:true
        },
        canAdd:{
            type:Boolean,
            default:false
        },
        canConfirm:{
            type:Boolean,
            default:true
        }
    },
    watch:{
        info:{
            handler:function(newVal){
                console.log("==>form newVal",newVal,this.canAdd)
                this.form.consignee=newVal.consignee||"";
                this.form.mobile=newVal.mobile||"";
                this.form.email=newVal.email||"";
                this.form.address=newVal.address||"";
                this.form.addressCode=newVal.province?[newVal.province,newVal.city,newVal.district]:[];
            },
            immediate:true,
            deep:true
        }
    },
    methods:{
        handleAdd:function(){
            this.$emit("add",this.form)
        },
        handleEdit:function(){
            this.$emit("edit",{id:this.info.id,...this.form})
        },
        handleAddressChange:function(value){
            this.form.addressCode=[value[0].id,value[1].id,value[2].id]  
        },
        handleChangeDefault:function(){
            this.$emit("changeDefault",{id:this.info.id,...this.form})
        }
    }
}
</script>

