import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/login.vue'
import Passwd from '../pages/login/passwd.vue'
import SetPasswd from '../pages/login/set-passwd.vue'
import Register from '../pages/login/register.vue'
import Index from '../pages/index/index.vue'
import Userinfo from '../pages/userinfo/index.vue'

Vue.use(Router)
const debug = process.env.NODE_ENV !== 'production'
const router = new Router({
  mode: debug ? '' : 'history',
  routes: [
    {
      path: '/mb/user/login(.*)',
      component: Login
    },
    {
      path: '/mb/user/index(.*)',
      component: Index
    },
    {
      path: '/mb/userinfo/index(.*)',
      component: Userinfo
    },
    {
      path: '/mb/user/passwd(.*)',
      component: Passwd
    },
    {
      path: '/mb/user/set-passwd(.*)',
      component: SetPasswd
    },
    {
      path: '/mb/user/register(.*)',
      component: Register
    }
  ]
})

router.beforeEach((to, from, next) => {
  var uid = parseInt(window.URL['login'])
  if (uid && !isNaN(uid)) {
    if (/^\/mb\/user\/login(.*)/.test(to.fullPath)) {
      next({
        path: '/mb/user/index.html'
      })
    } else {
      next()
    }
  } else {
    if (
      /^\/mb\/user\/login(.*)/.test(to.fullPath) ||
      /^\/mb\/user\/passwd(.*)/.test(to.fullPath) ||
      /^\/mb\/user\/register(.*)/.test(to.fullPath) ||
      /^\/mb\/user\/set-passwd(.*)/.test(to.fullPath)
    ) {
      next()
    } else if (/^\/mb\/user/.test(to.fullPath)) {
      next({
        path: '/mb/user/login.html'
      })
    } else {
      next()
    }
  }
})

export default router
