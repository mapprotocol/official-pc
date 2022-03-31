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
import './assets/less/map.less'
import animate from 'animate.css'
import api from './api/api'

import { VueJsonp } from 'vue-jsonp'

Vue.use(VueJsonp)

import toastRegistry from './vendor/toast/index'
Vue.use(toastRegistry)

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
  i18n,
  store,
  router,
  api,
  render: h => h(App)
}).$mount('#app')
