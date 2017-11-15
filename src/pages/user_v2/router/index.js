import Vue from 'vue'
import Router from 'vue-router'

const Bind = () => import('../pages/bind/index.vue')
const SetPasswd = () => import('../pages/password/set-passwd.vue')
const MergeTel = () => import('../pages/mergetel/mergetel.vue')
const Login = () => import('../pages/login/login.vue')
const Passwd = () => import('../pages/passwd/passwd.vue')
const Register = () => import('../pages/register/register.vue')
const Index = () => import('../pages/index/index.vue')

function beforeEnter (to, from, next) {
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
}

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
    },
    {
      path: '/mb/user/index(.*)',
      component: Index,
      beforeEnter: beforeEnter
    },
    {
      path: '/mb/user/login(.*)',
      component: Login,
      beforeEnter: beforeEnter
    },
    {
      path: '/mb/user/passwd(.*)',
      component: Passwd,
      beforeEnter: beforeEnter
    },
    {
      path: '/mb/user/register(.*)',
      component: Register,
      beforeEnter: beforeEnter
    }
  ]
})
export default router
