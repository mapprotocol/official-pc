import Vue from 'vue'
import Router from 'vue-router'
import { setTitle } from './libs/util'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  setTitle()
  next()
})

export default router
