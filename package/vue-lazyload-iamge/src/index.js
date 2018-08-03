import LazyloadDefaultImg from './lazyload_default.png'
import LazyloadBlankImg from './lazyload_blank.png'
import debounce from './debounce'
import throttle from './throttle'
import {
  scrollTop,
  getRandomKey
} from './unitl'


var globalLazyImgBox = []
var tempKey = getRandomKey()
var windowScrollTop = scrollTop()
var windowHeight = document.documentElement.clientWidth

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
          el.style.background = ''
        }
        if (item.level > 2) {
          cell.loading = false
        }
        img.onload = null
      }
      img.onerror = function () {
        if (level <= 0 && cell.times < 3) {
          el.src = LazyloadBlankImg
          el.style.background = '#f5f5f5 url(' + LazyloadDefaultImg + ') no-repeat center center'
          var size = el.getAttribute('data-background-size')
          if (size) {
            el.style.backgroundSize = size
          }
          globalLazyImgBox.push(cell)
        }
        cell.loading = false
        cell.times = (cell.times || 0) + 1
        img.onerror = null
      }
      img.src = item.src
    }
  })())
}

export default {

  install (Vue, options = {name: 'lazy'}) {
    var windowScrollFunctionInit1 = debounce(function () {
      globalLazyImgBox = globalLazyImgBox.map(item => {
        item.offset = {
          top: item.el.offsetTop,
          left: item.el.offsetLeft,
        }
        item.height = item.el.getBoundingClientRect().height
        return item
      })
    }, 80, true)

    var windowScrollFunctionInit2 = debounce(function () {
      globalLazyImgBox = globalLazyImgBox.map(item => {
        item.offset = {
          top: item.el.offsetTop,
          left: item.el.offsetLeft,
        }
        item.height = item.el.getBoundingClientRect().height
        return item
      })
    }, 80, false)

    var windowScrollFunction = throttle(function () {
      windowScrollTop = scrollTop()
      globalLazyImgBox = globalLazyImgBox.map(item => {
        if (!item.offset) {
          item.offset = {
            top: item.el.offsetTop,
            left: item.el.offsetLeft,
          }
        }
        if (!item.height) {
          item.height = item.el.getBoundingClientRect().height
        }
        return item
      })
      globalLazyImgBox = globalLazyImgBox.filter(item => {
        if (
          !item.offset ||
          (
            2 * windowHeight + windowScrollTop > item.offset.top &&
            windowScrollTop - windowHeight / 5 < item.offset.top + item.height
          )
        ) {
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

    let scrollFunction = () => {
      windowScrollFunctionInit1()
      windowScrollFunctionInit2()
      windowScrollFunction()
    }
    window.addEventListener('scroll', scrollFunction)

    Vue.directive(options.name, {
      bind (el, binding) {
        if (binding.value) {
          el.setAttribute(tempKey, el.src)
          el.src = LazyloadBlankImg
          var size = el.getAttribute('data-background-size')
          el.style.background = '#f5f5f5 url(' + LazyloadDefaultImg + ') no-repeat center center '
          if (size) {
            el.style.backgroundSize = size
          }
        }
      },
      inserted (el, binding) {
        binding.value && globalLazyImgBox.push({
          src: el.getAttribute(tempKey),
          el,
          binding
        })
        scrollFunction()
      },
      update (el, binding) {
        //console.log('update')
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
        scrollFunction()
      },
      unbind (el) {
        globalLazyImgBox = globalLazyImgBox.filter(item => item.el != el)
      }
    })
  }

}