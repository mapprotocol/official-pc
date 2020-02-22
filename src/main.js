import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from '@/locale/index'
import store from './store'
import VueMeta from 'vue-meta'
import './assets/less/marcopolo.less'

Vue.config.productionTip = false
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})
new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
