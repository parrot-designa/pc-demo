<template>
  <section class="py-12">
    <b-container>
      <b-row>
        <b-col cols="12" md="6">
          <b-card class="card-lg mb-10 mb-md-0">
            <h6 class="mb-7">{{ $t("userLogin.loginText") }}</h6>
            <b-form @submit="onSubmitLogin" @reset="onResetLogin">
              <b-row>
                <b-col cols="12">
                  <b-form-group label="">
                    <b-form-input
                      required
                      size="lg"
                      placeholder="用户名 *"
                      v-model="loginForm.user_name"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-group label="">
                    <b-form-input
                      size="lg"
                      required
                      v-model="loginForm.password"
                      placeholder="密码 *"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" class="col-md">
                  <b-form-group label="">
                    <b-form-checkbox
                      value="accepted"
                      unchecked-value="not_accepted"
                    >
                      记住我
                    </b-form-checkbox>
                  </b-form-group>
                </b-col>
                <b-col cols="12" class="col-md-auto">
                  <b-form-group label="">
                    <a class="font-size-sm text-reset" href="#"
                      >忘记用户名密码?</a
                    >
                  </b-form-group>
                </b-col>
                <b-col cols="12"></b-col>
              </b-row>

              <custom-button type="submit" :dark="true" size="sm"
                >登陆</custom-button
              >
            </b-form>
          </b-card>
        </b-col>
        <b-col cols="12" md="6">
          <b-card>
            <h6 class="mb-7">新用户注册</h6>
            <b-form @submit="onSubmitRegister" @reset="onResetRegister">
              <b-row>
                <b-col cols="12">
                  <b-form-group label="">
                    <b-form-input
                      required
                      size="lg"
                      placeholder="手机号 *"
                      v-model="registerForm.phone"
                      type="number"
                    ></b-form-input>
                  </b-form-group>
                </b-col>

                <b-col cols="12">
                  <b-form-group label="">
                    <b-row>
                      <b-col cols="7">
                        <b-form-input
                          size="lg"
                          required
                          placeholder="验证码 *"
                          v-model="registerForm.code"
                          type="number"
                        ></b-form-input
                      ></b-col>
                      <b-col cols="5">
                        <b-button
                          variant="primary"
                          @click="handleSendCode"
                          :disabled="isCountdowning"
                        >
                          {{ isCountdowning ? "正在发送验证码" : "发送验证码" }}
                          <template v-if="isCountdowning">{{
                            countdown
                          }}</template>
                        </b-button>
                      </b-col>
                    </b-row>
                  </b-form-group>
                </b-col>
                <b-col cols="12" md="6">
                  <b-form-group label="">
                    <b-form-input
                      size="lg"
                      required
                      placeholder="密码 *"
                      type="password"
                      v-model="registerForm.password1"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" md="6">
                  <b-form-group label="">
                    <b-form-input
                      size="lg"
                      required
                      placeholder="重复密码 *"
                      type="password"
                      v-model="registerForm.password2"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" md="auto">
                  <b-form-group label="">
                    <b-form-checkbox
                      value="accepted"
                      unchecked-value="not_accepted"
                    >
                      我已看过并接受我们的条款和条件，以及隐私政策和
                      个人敏感信息政策。
                    </b-form-checkbox>
                  </b-form-group>
                </b-col>
              </b-row>

              <custom-button type="submit" :dark="true" size="sm"
                >注册</custom-button
              >
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <custom-sliding-validation
      v-if="showSlidingValidation"
      @onClose="handleSlidingClose"
    />
  </section>
</template>

<script>
import CustomButton from "~/components/CustomButton.vue";
import axios from "axios";
import CustomSlidingValidation from "~/components/CustomSlidingValidation.vue";
import { phoneReg } from "@/utils"; 
let axiosPrefixCls = "https://baba.ltd/";

export default {
  components: { CustomButton, CustomSlidingValidation },
  data() {
    return {
      loginForm: {
        user_name: "",
        password: "",
      },
      registerForm: {
        phone: "",
        code: "",
        password1: "",
        password2: "",
      },
      countdown: 0,
      //是否显示图形验证码
      showSlidingValidation: false,
    };
  },
  computed: {
    //是否正在倒计时
    isCountdowning() {
      return this.countdown > 0;
    },
  },
  methods: {
    async onSubmitLogin(evt) {
      evt.preventDefault();
      const { password, user_name } = this.loginForm;

      let formData = new FormData();
      formData.append("user_name", user_name);
      formData.append("password", password);
      //const data=await login();
      const data = await axios.post(
        `${axiosPrefixCls}api/Public/login`,
        formData
      );
      if (data.data.code == 200) {
        this.$bvToast.toast(`登陆成功`, {
          autoHideDelay: 1000,
          title: "成功提示",
        });
        this.$router.push({path:'/login_success'})
        this.$store.commit('user/SET_TOKEN',data.data.data.token);
        this.$store.commit('user/SET_INFO',data.data.data);
      } else {
        this.$bvToast.toast(data.data.message, {
          autoHideDelay: 1000,
          title: "错误提示",
        });
      }
      console.log("--onSubmitRegister---", data);
    },
    onResetLogin() {},
    async onSubmitRegister(evt) {
      evt.preventDefault();
      const { password1, password2, phone, code } = this.registerForm;
      if (!phoneReg.test(phone)) {
        this.$bvToast.toast(`手机号有误,请重新输入`, {
          autoHideDelay: 1000,
          title: "提示",
        });
        return;
      }
      if (!code) {
        this.$bvToast.toast(`手机验证码必填`, {
          autoHideDelay: 1000,
          title: "提示",
        });
        return;
      }
      if (password1 !== password2) {
        this.$bvToast.toast(`密码和输入密码必须保持一致`, {
          autoHideDelay: 1000,
          title: "提示",
        });
        return;
      }
      let formData = new FormData();
      formData.append("password", password1);
      formData.append("repassword", password2);
      formData.append("phone", phone);
      formData.append("code", code);
      const data = await axios.post(
        `${axiosPrefixCls}api/Public/register`,
        formData
      );
      if (data.data.code == 200) {
        this.$bvToast.toast(`注册成功`, {
          autoHideDelay: 1000,
          title: "成功提示",
        });
      } else {
        this.$bvToast.toast(data.data.message, {
          autoHideDelay: 1000,
          title: "错误提示",
        });
      }
      console.log("--onSubmitRegister---", data);
    },
    onResetRegister() {},
    //发送验证码
    handleSendCode() {
      this.showSlidingValidation = true;
    },
    async startSendCode() {
      let formData = new FormData();
      formData.append("phone", this.registerForm.phone);
      const data = await axios.post(
        `${axiosPrefixCls}api/Public/reg_sms`,
        formData
      ); 
      if (data.data.code == 200) {
        this.countdown = 60;
        let timeout = setInterval(() => {
          this.countdown--;
          if (this.countdown === 0) {
            clearInterval(timeout);
          }
        }, 1000);
        this.$bvToast.toast(`短信发送成功`, {
          autoHideDelay: 1000,
          title: "成功提示",
        });
      } else {
        this.$bvToast.toast(data.data.message, {
          autoHideDelay: 1000,
          title: "错误提示",
        });
      }
    },
    handleSlidingClose(flag) {
      this.showSlidingValidation = false;
      if (flag) {
        this.startSendCode();
      } else {
      }
    },
  },
};
</script>

<style lang="scss">
.sliding-validation-wrapper {
  z-index: 1000;
}
</style>