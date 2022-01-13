<template>
  <div>
    <div class="review">
      <div class="review-body">
        <b-row>
          <b-col cols="12" md="4" lg="3" xl="2">
             <div class='avatar avatar-xxl mb-6 mb-md-0'>
               <span class='card-img avatar-title rounded-circle'>
                 <a class='btn btn-xxs btn-block btn-dark card-btn' @click="$router.push({path:'/user/account'})">修改头像</a>
                 <img :src="useInfo.head" />
               </span>
             </div>
          </b-col>
          <b-col cols="12" md="8" lg="9" xl="10">
            <h3 class="mt-3 mb-5 font-weight-bold">{{ useInfo.user_name }}</h3>
            <h5 class="mb-2 font-weight-bold"></h5>
            <h5 class="text-gray-500"></h5>
            <b-row class="mb-6">
              <b-col cols="12">
                <span class="font-size-xl text-muted">
                  您的上一次登陆时间:
                  <time datetime="2021-10-22 17:27:50"
                    >2021-10-22 17:27:50</time
                  >
                </span>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="review">
      <div class="review-body">
        <b-row>
          <b-col cols="12" md="8" lg="9" xl="10">
            <b-row class="mb-6">
              <b-col cols="12">
                <div class="mt-3 font-size-xl text-muted">
                  <span class="font-size-sm">
                    <i class="iconfont icon-yue"></i>
                    <span>积分：21039积分</span>
                  </span>
                </div>
                <div class="mt-3 font-size-xl text-muted">
                  <span class="font-size-sm">
                    <i class="iconfont icon-yue"></i>
                    <span>近20天订单0个</span>
                  </span>
                  <span class="badge badge-dark font-size-sm"
                    >查看全部订单</span
                  >
                </div>
                <div class="mt-3 font-size-xl text-muted">
                  <span class="font-size-sm">
                    <i class="iconfont icon-yue"></i>
                    <span>优惠券：共计3个，价值¥300.00</span>
                  </span>
                  <span class="badge badge-dark font-size-sm">查看优惠券</span>
                </div>
                <div class="mt-3 font-size-xl text-muted">
                  <span class="font-size-sm">
                    <i class="iconfont icon-yue"></i>
                    <span>余额¥0.00</span>
                  </span>
                  <span class="badge badge-dark font-size-sm">查看余额</span>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("user", {
      useInfo: (state) => state.info,
    }),
  },
  watch: {
    useInfo: function (val) {
      console.log("====useInfo===>", val);
    },
  },
};
</script>