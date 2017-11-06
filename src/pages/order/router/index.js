import Vue from 'vue'
import Router from 'vue-router'
import Order from '../pages/order.vue'
import OrderShow from '../pages/order-show.vue'

Vue.use(Router)
const debug = process.env.NODE_ENV !== 'production'
const router = new Router({
  mode: debug ? '' : 'history',
  routes: [
    {
      path: '/mb/pay/payorder(.*)',
      component: Order
    },
    {
      path: '/mb/pay/myorder(.*)',
      component: OrderShow
    }
  ]
})

router.beforeEach((to, from, next) => {
  var uid = parseInt(window.URL['login'])
  if (uid && !isNaN(uid)) {
    next()
  } else {
    if (/^\/mb\/user\/login(.*)/.test(to.fullPath)) {
      next()
    } else {
      window.location = '/mb/user/login.html'
    }
  }
})

export default router
