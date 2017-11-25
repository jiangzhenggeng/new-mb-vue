import Vue from 'vue'
import Loading from './../../components/loading'
import VuejUI from 'vue-jui/src'

Vue.use(VuejUI)
Vue.use(Loading)
import App from './app.vue'
import store from './../../store'

function boot (options) {
  options.el = options.el || '#app'
  options.mixins = options.mixins || []
  options.mixins = [...options.mixins]
  if (options.router && options.store) {
    options.router.beforeEach((to, from, next) => {
      options.store.dispatch('routerLoading', true)
      next()
    })
    options.router.afterEach((to, from) => {
      options.store.dispatch('routerLoading', false)
    })
  }

  return new Vue(options)
}

boot({
  store,
  render: _ => _(App)
})

