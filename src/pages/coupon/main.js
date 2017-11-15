import App from './app.vue'
import store from './../../store'
import router from './router'

router.beforeEach((to, from, next) => {
  store.dispatch('routerLoading', true)
  next()
})

router.afterEach((to, from) => {
  store.dispatch('routerLoading', false)
})

require('./../boot')({
  router,
  store,
  render: _ => _(App)
})

