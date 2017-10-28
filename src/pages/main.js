import Vue from 'vue'
import App from './app.vue'
import Loading from './../components/loading'
import store from './../store'
import router from './../router'
import jQuery from 'imports-loader?$=jquery,jQuery=jquery!jquery'
import Waves from '../components/button/waves'
Vue.use(Waves)
import Lazyload from '../components/lazyload/index'
Vue.use(Lazyload)

window.$WIN_HEIGHT = jQuery(window).height()
window.$WIN_WIDTH = jQuery(window).width()

Vue.use(Loading)

new Vue({
	el: '#app',
	router,
	store,
	render: _ => _(App)
});

