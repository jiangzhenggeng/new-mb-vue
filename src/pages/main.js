import Vue from 'vue'
import App from './app.vue'
import ComponentsBase from '../components-base'
import store from './../store'
import router from './../router'
import Lazyload from '../components/lazyload/index'

Vue.use(Lazyload)
Vue.use(ComponentsBase)

new Vue({
	el: '#app',
	router,
	store,
	render: _ => _(App)
})



