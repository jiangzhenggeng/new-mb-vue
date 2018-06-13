// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'jquery'
import App from './app.vue'

let animateElArray = []
Vue.directive('animate', {
  bind (el) {
    $(el).addClass('k-animate-2')
    animateElArray.push(el)
  },
  unbind (el) {
    let index = animateElArray.indexOf(el)
    if (index > -1) {
      animateElArray.splice(index, 1)
    }
  },
})

new Vue({
  el: '#app',
  render: _ => _(App),
  mounted () {
    var winHeight = $(window).height()
    var lastTime = 0
    $(window).on('scroll.into.animate', function () {
      if (lastTime + 30 > new Date().getTime()) {
        return
      }
      lastTime = new Date().getTime()
      var scrollTop = $(window).scrollTop()
      animateElArray.forEach((el) => {
        if ($(el).hasClass('into-k-animate')) {
          return false
        }
        if (scrollTop + winHeight > $(el).offset().top) {
          $(el).addClass('into-k-animate')
          return false
        }
        return true
      })
    }).trigger('scroll.into.animate')
  },
})
