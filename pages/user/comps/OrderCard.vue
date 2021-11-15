<template>
  <div class="card mb-5 border card-lg">
    <div class="card-body pb-0">
      <div class="card card-sm">
        <div class="card-body bg-light">
          <b-row>
            <b-col cols="6" lg="3">
              <h6 class="heading-xxxs text-muted">订单号</h6>
              <p class="mg-lg-0 font-size-xxs font-weight-bold">
                #2021090152525
              </p>
            </b-col>
            <b-col cols="6" lg="3">
              <h6 class="heading-xxxs text-muted">订单总金额</h6>
              <p class="mg-lg-0 font-size-xxs font-weight-bold">￥5640.00</p>
            </b-col>
            <b-col cols="6" lg="3">
              <h6 class="heading-xxxs text-muted">下单时间</h6>
              <p class="mg-lg-0 font-size-xxs font-weight-bold">
                2021-09-01 15:24:23
              </p>
            </b-col>
            <b-col cols="6" lg="3">
              <h6 class="heading-xxxs text-muted">订单状态</h6>
              <p class="mg-lg-0 font-size-xxs font-weight-bold">
                已取消,未付款,未发货
              </p>
            </b-col>
            <b-col cols="6" lg="3">
              <h6 class="heading-xxxs text-muted">订单操作</h6>
              <p class="mg-lg-0 font-size-xxs font-weight-bold">已取消</p>
            </b-col>
          </b-row>
        </div> 
      </div>
       <div class="card-footer">
           <b-row align-h="center">
               <b-col cols="12" lg="6">
                   <div class="form-row mb-4 mb-lg-0">
                       <b-col cols="3">
                         <OrderImg img="https://www.chhes.com/images/202106/thumb_img/1099_thumb_G_1623828424659.jpg" />
                       </b-col>
                   </div>
               </b-col>
               <b-col cols="12" lg="6">
                   <div class="form-row">
                       <b-col cols="6"></b-col>
                       <b-col cols="6">
                           <OrderButton title="订单详情" />
                       </b-col>
                   </div>
               </b-col>
           </b-row>
       </div>
    </div>
  </div>
</template>

<script>
import OrderButton from './OrderButton.vue'
import OrderImg from './OrderImg.vue'
export default {
    components:{
        OrderButton,
        OrderImg
    }
}
</script>