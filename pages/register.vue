<template>
  <div>
    <Nav />
    <section class="py-12">
      <b-container>
        <b-row>
          <b-col cols="12" md="6">
            <b-card class="card-lg mb-10 mb-md-0">
              <h6 class="mb-7">{{ $t('userLogin.loginText') }}</h6>
              <b-form @submit="onSubmitLogin" @reset="onResetLogin">
                <b-row>
                  <b-col cols="12">
                    <b-form-group label="">
                      <b-form-input
                        required
                        size="lg"
                        placeholder="用户名 *"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group label="">
                      <b-form-input
                        size="lg"
                        required
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
                        placeholder="用户名 *"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group label="">
                      <b-form-input
                        size="lg"
                        required
                        placeholder="电子邮箱 *"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12" md="6">
                    <b-form-group label="">
                      <b-form-input
                        size="lg"
                        required
                        placeholder="密码 *"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12" md="6">
                    <b-form-group label="">
                      <b-form-input
                        size="lg"
                        required
                        placeholder="重复密码 *"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12" md="auto">
                    <b-form-group label="">
                      <b-form-checkbox
                        value="accepted"
                        unchecked-value="not_accepted"
                      >
                        我已看过并接受我们的条款和条件，以及隐私政策和 个人敏感信息政策。
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
    </section>
    <Footer />
  </div>
</template>

<script>
import CustomButton from "~/components/CustomButton.vue";
export default {
  components: { CustomButton },
  methods: {
    onSubmitLogin() {},
    onResetLogin() {},
    onSubmitRegister() {},
    onResetRegister() {},
  },
};
</script>

<style lang="scss">
</style>