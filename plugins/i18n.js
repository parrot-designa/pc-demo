import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
    // Set i18n instance on app
    // This way we can use it in middleware and pages asyncData/fetch
    app.i18n = new VueI18n({
      locale: store.state.locale,
      fallbackLocale: 'zh-CN',   //我这里默认语言为中文
      messages: {
        'en-US': require('@/locales/en-US.json'),
        'zh-CN': require('@/locales/zh-CN.json')
      }
    }) 
  }     