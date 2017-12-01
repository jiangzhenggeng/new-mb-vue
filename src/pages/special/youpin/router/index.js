import Vue from 'vue'
import Router from 'vue-router'
import Index from './../components/index.vue'
import Register from './../components/register/register.vue'

Vue.use(Router)

export default new Router({
	mode: process.env.NODE_ENV !== 'production' ? '' : 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/register',
      component: Register
    }
  ]
})
