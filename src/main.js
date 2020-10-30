import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from '@/locale/index'
import store from './store'
import VueMeta from 'vue-meta'
import VueAnimateOnScroll from 'vue-animate-onscroll'
import * as THREE from 'three'
import * as ThreeStats from 'three-stats'
import * as OrbitControls from 'three-orbitcontrols'
import './assets/less/marcopolo.less'
import animate from 'animate.css'
import api from './api/api'
import scroll from 'vue-seamless-scroll'
Vue.use(scroll)

Vue.config.productionTip = false
Vue.prototype.THREE = THREE
Vue.prototype.ThreeStats = ThreeStats
Vue.prototype.OrbitControls = OrbitControls
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})
Vue.use(animate);
Vue.use(VueAnimateOnScroll)
new Vue({
  api,
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
