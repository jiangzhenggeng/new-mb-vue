import Vue from 'vue'
import Router from 'vue-router'
import Bind from '../pages/bind/index.vue'
import SetPasswd from '../pages/password/set-passwd.vue'
import MergeTel from '../pages/mergetel/mergetel.vue'

Vue.use(Router)
const debug = process.env.NODE_ENV !== 'production'
const router = new Router({
  mode: debug ? '' : 'history',
  routes: [
    {
      path: '/mb/userv2/bind(.*)',
      component: Bind
    },
    {
      path: '/mb/userv2/setpassword(.*)',
      component: SetPasswd
    },
    {
      path: '/mb/userv2/mergetel(.*)',
      component: MergeTel
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   var uid = parseInt(window.URL['login'])
//   if (uid && !isNaN(uid)) {
//     if (/^\/mb\/user\/login(.*)/.test(to.fullPath)) {
//       next({
//         path: '/mb/user/index.html'
//       })
//     } else {
//       next()
//     }
//   } else {
//     if (
//       /^\/mb\/user\/login(.*)/.test(to.fullPath) ||
//       /^\/mb\/user\/passwd(.*)/.test(to.fullPath) ||
//       /^\/mb\/user\/register(.*)/.test(to.fullPath) ||
//       /^\/mb\/user\/set-passwd(.*)/.test(to.fullPath)
//     ) {
//       next()
//     } else if (/^\/mb\/user/.test(to.fullPath)) {
//       next({
//         path: '/mb/user/login.html'
//       })
//     } else {
//       next()
//     }
//   }
// })

export default router
