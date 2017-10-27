import Vue from 'vue'
import App from './app.vue'
import Loading from './../../components/loading'
import store from './../../store'
import router from './router/index'
import jQuery from 'jquery'
import Waves from '../../components/button/waves'
Vue.use(Waves)
import Lazyload from '../../components/lazyload/index'
Vue.use(Lazyload)

import { Alert, Confirm, Toast } from 'wc-messagebox'

Vue.use(Alert)
Vue.use(Confirm)
Vue.use(Toast)

window.$WIN_HEIGHT = jQuery(window).height()
window.$WIN_WIDTH = jQuery(window).width()

Vue.use(Loading)

new Vue({
  el: '#app',
  store,
  router,
  render: _ => _(App)
})

