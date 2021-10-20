<template>
  <footer class="bg-dark bg-cover">
    <div class="py-12 border-bottom border-gray-700">
      <b-container>
        <b-row align-h="center">
          <b-col cols="12" md="8" lg="8" xl="8">
            <h5 class="mb-5 text-center text-white">E-MAIL邮件订阅</h5>
            <b-form-row class="mb-5 align-items-start">
              <b-col>
                <custom-input placeholder="Email获取最新消息" />
              </b-col>
              <b-col class='col-auto'>
                <custom-button :gray="true">邮件订阅</custom-button>
              </b-col>
            </b-form-row>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="3">
            <h4 class="mb-5 text-white">CHHES</h4>
            <ul class="list-unstyled list-inline mb-5 mb-md-0">
              <li class="list-inline-item"></li>
            </ul>
          </b-col>
          <NavItemOne title="服务政策" :data="list1" />
          <NavItemOne title="购物指南" :data="list2" />
          <NavItemOne title="配送与支付" :data="list3" />
          <NavItemOne title="关于我们" :data="list4" />
        </b-row>
      </b-container>
    </div>
    <div class="py-4">
      <div class="container">
        <b-row>
          <b-col>
            <p class="mb-3 mb-md-0 font-size-xxs text-muted">
              本站所展示CHROME HEARTS、CHROME HEARTS标志和图案的全部均CHROME
              HEARTS公司注册商标。
              <br />
              声明：本站是CHHES买手店，非克罗心官网，请您知晓。
              <br />
              © 2021 chhes.com 保留所有权利. ICP备案证书号:<a
                style="color: #999"
                >京ICP备16008025号-21</a
              >
            </p>
          </b-col>
          <b-col class="col-auto">
            <img
              src="https://www.chhes.com/assets/img/payment/mastercard.svg"
              class="footer-payment"
            />
            <img
              src="https://www.chhes.com/assets/img/payment/mastercard.svg"
              class="footer-payment"
            />
            <img
              src="https://www.chhes.com/assets/img/payment/mastercard.svg"
              class="footer-payment"
            />
            <img
              src="https://www.chhes.com/assets/img/payment/mastercard.svg"
              class="footer-payment"
            />
            <img
              src="https://www.chhes.com/assets/img/payment/mastercard.svg"
              class="footer-payment"
            />
          </b-col>
        </b-row>
      </div>
    </div>
  </footer>
</template>

<script>
import CustomInput from './CustomInput.vue';
export default {
  components: { CustomInput },
  data() {
    return {
      list1: [
        { name: "条款和条件" },
        { name: "隐私政策" },
        { name: "个人敏感信息" },
        { name: "退换货政策" },
      ],
      list2: [
        { name: "我的购物车" },
        { name: "我的订单" },
        { name: "免费鉴别服务" },
      ],
      list3: [{ name: "配送方式" }, { name: "支付方式" }],
      list4: [
        { name: "联系我们" },
        { name: "品牌介绍" },
        { name: "APP下载" },
        { name: "买手合作" },
      ],
    };
  },
};
</script>

<style lang="scss">
.footer-payment {
  height: 1.5rem;
  width: auto;
}
</style>