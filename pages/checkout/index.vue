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
                <CheckoutTable 
                    :dataSource="shipList"
                    title="配送方式"
                    v-model="shipValue"
                    keyField="shipping_code"
                />
                <CheckoutTable 
                    :dataSource="payTypeList"
                    title="支付方式"
                    v-model="payValue"
                    keyField="code"
                />
                <CheckoutTable2 
                    :dataSource="packList"
                />
                <CheckoutTextarea 
                />
            </b-col>
            <b-col cols="12" md="5" lg="4" offset-lg="1">
                <GoodData :data="goodInfo" />

                <NormalButton :dark="true" @click="handleConfirm">确认并下单</NormalButton>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapState } from 'vuex';
import CheckoutConsignee from './comps/CheckoutConsignee.vue'
import CheckoutTable from './comps/table.vue'
import CheckoutTable2 from './comps/table2.vue'
import CheckoutTextarea from './comps/textarea.vue'
import GoodData from './comps/goodData.vue'
import { savePayType,saveShip } from '@/server/order'
import { getGoodsInfo,getShipList,getPaytypeList,getPackList } from '@/server/checkout';

export default {
    data(){
        return {
            shipValue:'',
            payValue:'',
            shipList:[],
            goodInfo:{},
            packList:[]
        }
    },  
    components:{
        CheckoutConsignee,
        CheckoutTable,
        CheckoutTable2,
        CheckoutTextarea,
        GoodData
    },
    computed:{
        ...mapState('checkout',{
            currentAddress:state=>state.currentAddress, 
            payTypeList:state=>state.payTypeList 
        })
    },
    mounted:function(){
        this.getGoodInfo();
        this.getDefaultAddress(); 
        this.getPayTypeList();
    },
    watch:{
        payValue:{
            handler:function(newValue){ 
                if(newValue){
                    savePayType({payment_code:newValue});
                } 
            }
        },
        shipValue:{
            handler:function(newValue){  
                if(newValue){
                    saveShip({shipping_code:newValue});
                } 
            }
        },
    },
    methods:{
        getDefaultAddress:async function(){
            let address=await this.$store.dispatch("checkout/getDefaultAddress"); 
            const res = await getShipList({
                country:1,
                province:address.province,
                city:address.city,
                district:address.district
            });
            this.shipList=res.data.map(item=>({...item,label:item.shipping_name,text:item.shipping_desc})) 
        },
        getGoodInfo:async function(){
            const res = await getGoodsInfo();
            this.goodInfo=res.data.map(item=>({...item,...item.product_info}));
            const goods_id_str=this.goodInfo.map(item=>item.gid).join(",");
            const { data } = await getPackList({goods_id_str});  
            this.packList=data; 
        },
        handleEditAddress:function(){
            this.$router.push("/address")
        },
        getPayTypeList:function(){
            this.$store.dispatch("checkout/getPaytypeList")
        },
        handleConfirm:function(){ 
            this.$store.dispatch("order/createOrder").then(res=>{ 
                if(res.errcode!==0){
                    this.$message.warning(res.errmsg)
                }else{
                    this.$router.push("/checkout/success");
                }
            })
        }
    }

}
</script>