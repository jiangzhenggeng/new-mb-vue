import Vue from 'vue'
import Router from 'vue-router'

const Bind = () => import('../pages/coupon.vue')
const Draw = () => import('../pages/draw.vue')

Vue.use(Router)
const debug = process.env.NODE_ENV !== 'production'
const router = new Router({
  mode: debug ? '' : 'history',
  routes: [
    {
      path: '/mb/user/coupon(.*)',
      component: Bind
    },
    {
      path: '/mb/user/draw(.*)',
      component: Draw
    },
    {
      path: '*',
      redirect: '/mb/user/coupon.html'
    }
  ]
})
export default router
