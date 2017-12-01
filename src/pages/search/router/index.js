import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue'
import event from '../pages/event.vue'
import article from '../pages/article.vue'

Vue.use(Router)
const router = new Router({
  mode: process.env.NODE_ENV !== 'production' ? '' : 'history',
  routes: [
    {
      path: '/mb/search/list.html',
      component: index
    },
    {
      path: '/mb/search/event.html',
      component: event
    },
    {
      path: '/mb/search/article.html',
      component: article
    },
    {
      path: '*',
      redirect: '/mb/search/list.html'
    },
  ]
})

export default router
