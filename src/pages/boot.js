import Vue from 'vue'
import Loading from './../components/loading'

Vue.use(Loading)
import jQuery from 'jquery'
import Waves from '../components/button/waves'

Vue.use(Waves)
import Lazyload from '../components/lazyload/index'

Vue.use(Lazyload)

import { Alert, Confirm, Toast } from 'wc-messagebox'

Vue.use(Alert)
Vue.use(Confirm)
Vue.use(Toast)

window.$WIN_HEIGHT = jQuery(window).height()
window.$WIN_WIDTH = jQuery(window).width()

import WindiwDialog from '../components/window/index'
Vue.use(WindiwDialog)

import mainMixins from './mainMixins'

module.exports = function (options) {
  options.el = options.el || '#app'
  options.mixins = options.mixins || []
  options.mixins = [mainMixins, ...options.mixins]
  if( options.router && options.store ){
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


