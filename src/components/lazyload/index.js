import LazyloadDefaultImg from './lazyload_default.png'
import LazyloadBlankImg from './lazyload_blank.png'

import $ from 'jquery'
import tools from '../../tools/index'

var globalLazyImgBox = []
var tempKey = 'id-' + String(Math.random()).replace('.', '')
var windowScrollTop = $(window).scrollTop()
var windowHeight = $(window).height()

const loadimg = (el, array, callback, cell) => {
  if (cell.loading) return
  var level = 0
  cell.loading = true
  array.forEach((function () {
    return function (item) {
      var img = new Image()
      img.onload = function () {
        if (item.level >= level) {
          level = item.level
          callback.call(el, item.src)
        }
        if (item.level > 2) {
          cell.loading = false
        }
      }
      img.onerror = function () {
        if (level <= 0 && cell.times < 3) {
          el.src = LazyloadBlankImg
          el.style.background = '#f5f5f5 url(' + LazyloadDefaultImg + ') no-repeat center center'
          globalLazyImgBox.push(cell)
        }
        cell.loading = false
        cell.times = (cell.times || 0) + 1
      }
      img.src = item.src
    }
  })())
}

export default {

  install (Vue, options = {name: 'lazy'}) {
    var windowScrollFunctionInit1 = tools.debounce(function () {
      globalLazyImgBox = globalLazyImgBox.map(item => {
        if(!item.offset){
          item.offset = $(item.el).offset()
        }
        return item
      })
    },true);
    var windowScrollFunctionInit2 = tools.debounce(function () {
      globalLazyImgBox = globalLazyImgBox.map(item => {
        if(!item.offset){
          item.offset = $(item.el).offset()
        }
        return item
      })
    },false);

    var windowScrollFunction = tools.throttle(function () {
      windowScrollTop = $(window).scrollTop()
      globalLazyImgBox = globalLazyImgBox.filter(item => {
        if (windowHeight + windowScrollTop > item.offset.top) {
          var imgArray = []
          if (item.src) {
            imgArray.push({
              src: item.src,
              level: 1
            })
          }
          imgArray.push({
            src: item.binding.value,
            level: 2
          })
          loadimg(item.el, imgArray, function (src) {
            this.src = src
          }, item)
          return false
        }
        return true
      })
    }, 320)

    $(window).on('scroll.lazy', () => {
      windowScrollFunctionInit1();
      windowScrollFunctionInit2();
      windowScrollFunction()
    })

    Vue.directive(options.name, {
      bind (el, binding) {
        if (binding.value) {
          el.setAttribute(tempKey, el.src)
          el.src = LazyloadBlankImg
          el.style.background = '#f5f5f5 url(' + LazyloadDefaultImg + ') no-repeat center center'
        }
      },
      inserted (el, binding) {
        binding.value && globalLazyImgBox.push({
          src: el.getAttribute(tempKey),
          el,
          binding
        })
        $(window).trigger('scroll.lazy')
      },
      update (el, binding) {
        globalLazyImgBox = globalLazyImgBox.map(item => {
          if (item.el == el) {
            item.binding = binding
          }
          return item
        })
      },
      componentUpdated (el, binding) {
        globalLazyImgBox = globalLazyImgBox.map(item => {
          if (item.el == el) {
            item.binding = binding
          }
          return item
        })
        $(window).trigger('scroll.lazy')
      },
      unbind (el) {
        globalLazyImgBox = globalLazyImgBox.filter(item => item.el != el)
      }
    })
  }

}