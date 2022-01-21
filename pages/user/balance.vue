<template>
  <balance-tabs>
    <template slot="first">
      <table class="table table-borderless">
        <tbody>
          <tr>
            <td>充值金额</td>
          </tr>
          <tr>
            <td>
              <custom-input2 />
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table">
        <thead class="thead-light">
          <tr>
            <td style="border-top: 0">支付方式</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <custom-radio label="支付宝" text="Alipay支付宝支付" />
            </td>
          </tr>
          <tr>
            <td>
              <custom-radio label="微信扫码" text="手机微信扫码支付" />
            </td>
          </tr>
          <tr>
            <td>
              <custom-radio label="支付宝扫码" text="支付宝扫码支付" />
            </td>
          </tr>
          <tr>
            <td>
              <custom-radio label="支付宝APP" text="支付宝手机APP支付" />
            </td>
          </tr>
          <tr>
            <td>
              <NormalButton>提交申请</NormalButton>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
     <template slot="second">
          <table class="table table-borderless">
        <tbody>
          <tr>
            <td>提现金额:</td>
          </tr>
          <tr>
            <td>
              <custom-input2 />
            </td>
          </tr>
        </tbody>
          <NormalButton>提交申请</NormalButton>
      </table>
     </template>
     <template slot="third">
         <table class="table">
           <thead>
             <tr>
               <th style="border-top:0;">操作时间</th>
               <th style="border-top:0;">类型</th>
               <th style="border-top:0;">金额</th>
               <th style="border-top:0;">备注</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td colspan="4">
                 <label>您当前的可用资金为：￥0.00</label>
               </td>
             </tr>
           </tbody>
         </table>
     </template>
  </balance-tabs>
</template>


<script>
import BalanceTabs from "./comps/BalanceTabs.vue";
export default {
  components: {
    BalanceTabs,
  },
};
</script>

<style lang="scss" scoped>
</style>