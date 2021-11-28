<template>
    <b-container class="page-checkout">
        <PageTop 
            title="订单确认支付"
            subtitle="请核对您的收货地址和帐单地址，然后点击“确认并下单”"
        />
        <b-row>
            <b-col cols="12" md="7">
                <CheckoutConsignee 
                    :info="currentAddress" 
                    @edit="handleEditAddress"
                />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapState } from 'vuex';
import CheckoutConsignee from './comps/CheckoutConsignee.vue'
import CheckoutTable from './comps/table.vue'

export default {
    components:{
        CheckoutConsignee,
        CheckoutTable
    },
    computed:{
        ...mapState('checkout',{
            currentAddress:state=>state.currentAddress,
        })
    },
    mounted:function(){
        this.getGoodInfo();
        this.getDefaultAddress(); 
    },
    methods:{
        getDefaultAddress:async function(){
            let address=await this.$store.dispatch("checkout/getDefaultAddress");
            console.log("==address=>",address)
            let shipList=await this.$store.dispatch("checkout/getShipList",{
                province:address.province,
                city:address.city,
                district:address.district
            });
        },
        getGoodInfo:function(){
            this.$store.dispatch("checkout/getGoodsInfo")
        },
        handleEditAddress:function(){
            this.$router.push("/address")
        }
    }

}
</script>