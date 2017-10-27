import Vue from 'vue'
import App from './app.vue'
import Loading from './../../components/loading'
import store from './../../store'
import jQuery from 'jquery'
import Waves from '../../components/button/waves'
Vue.use(Waves)

window.$image_root = 'http://m.jiguo.com/test/images/'
window.$image_load_default = Vue.$image_root + '6cd46230.lazyload_default.png'
window.$WIN_HEIGHT = jQuery(window).height()
window.$WIN_WIDTH = jQuery(window).width()

Vue.use(Loading)

new Vue({
  el: '#app',
  store,
  render: _ => _(App)
});

