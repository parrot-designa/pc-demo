<template>
    <section class="py-10 mb-12">
        <b-container>
            <b-row class="justify-content-center">
                <b-col cols="12" md="10" lg="8" xl="6">
                    <div class="mb-7 font-size-h1">❤️</div>
                    <h2 class="mb-5">订单确认支付</h2>
                    <p class="mb-7 text-gray-500">
                        订单号：
                        <span class="text-body text-decoration-underline">#{{orderInfo.order_sn}}</span>
                         您的订单提交成功，请尽快支付！
                         <span>
                            已选支付方式：{{orderInfo.pay_name}}扫码。 
                            <a class="text-body text-decoration-underline">查看订单</a>
                            或更改支付方式
                            <a class="text-body text-decoration-underline">点击切换支付</a>。
                            应付金额：
                            <b>￥{{orderInfo.pay_fee}}</b>
                         </span>
                    </p>

                    <NormalButton>{{orderInfo.pay_name}}扫码支付</NormalButton>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed:{
        ...mapState('order',{
            orderInfo:state=>state.orderInfo, 
        })
    },
    watch:{
        orderInfo:{
            handler:function(newVal){
                console.log("===orderInfo",newVal)
                if(newVal.order_id && !newVal.order_sn){
                    this.$store.dispatch("order/detail",newVal.order_id)
                }
            },
            deep:true,
            immediate:true
        }
    }
}
</script>