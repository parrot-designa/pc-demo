<template>
    <div class="form-group">
        <label>{{title}}{{required?"*":""}}</label>
        <template v-if="isAddressList">
            <AddressSelect @change="handleAddressChange" :initialCode="initialCode"/>
        </template>
        <input class="form-control form-control-sm" v-model="value" v-else/>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String
        },
        initialValue:{
            type:[Object,Array,String]
        },
        type:{
            type:String,
            default:'text'
        },
        required:{
            type:Boolean,
            default:false
        },
        initialCode:{
            type:Array,
            default:()=>[]
        }
    },
    data(){
        return {
            value:''
        }
    },
    computed:{
        isAddressList(){
            return this.type==='addressList'
        }
    },
    methods:{
        handleAddressChange:function(value){ 
            this.$emit("change",value);
        }
    },
    mounted:function(){ 
    },
    watch:{
        initialValue:{
            handler:function(newVal){ 
                this.value=newVal;
            },
            immediate:true
        },
        initialCode:{
            handler:function(newVal){ 
                // this.value=newVal;
            },
            immediate:true
        },
        value:{
            handler:function(newVal){
                this.$emit('input',newVal);
            },
            immediate:true
        }
    }
}
</script>