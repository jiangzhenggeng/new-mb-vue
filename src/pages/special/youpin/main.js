// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import Loading from './components/loading'
import Waves from '../../../components/button/waves'
Vue.use(Waves)
import Lazyload from '../../../components/lazyload/index'
Vue.use(Lazyload)

Vue.config.productionTip = false
Vue.use(Loading)

import {Alert, Confirm, Prompt, Toast} from 'wc-messagebox'
import '../../../style/scss/components/wc-messagebox.scss'

Vue.use(Alert)
Vue.use(Confirm)
Vue.use(Prompt)
Vue.use(Toast)

new Vue({
  el: '#app',
  router,
  store,
  render: _ => _(App)
});
