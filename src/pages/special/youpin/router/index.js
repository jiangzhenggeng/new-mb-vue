import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './../components/index.vue'
import Register from './../components/register/register.vue'

if (process.env['vue-router']!=='VueRouter') {
	Vue.use(VueRouter);
}

export default new VueRouter({
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
