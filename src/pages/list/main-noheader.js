import Vue from 'vue'
import App from './app-noheader.vue'
import Loading from './../../components/loading'
import store from './../../store'
import jQuery from 'jquery'
import Waves from '../../components/button/waves'

Vue.use(Waves)
import Lazyload from '../../components/lazyload/index'

Vue.use(Lazyload)

window.$WIN_HEIGHT = jQuery(window).height()
window.$WIN_WIDTH = jQuery(window).width()

Vue.use(Loading)

new Vue({
  el: '#app',
  store,
  render: _ => _(App)
})






