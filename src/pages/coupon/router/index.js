import Vue from 'vue'
import VueRouter from 'vue-router'

const Bind = () => import('../pages/coupon.vue')
const Draw = () => import('../pages/draw.vue')
if (process.env['vue-router']!=='VueRouter') {
	Vue.use(VueRouter);
}
const debug = process.env.NODE_ENV !== 'production'
const router = new VueRouter({
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
