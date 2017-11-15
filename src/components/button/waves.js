import 'node-waves/dist/waves.min.css'
import Waves from 'node-waves/dist/waves.min'

export default {
  install (Vue, options = {name: 'waves'}) {
    var _installObj = {
      inserted (el, binding) {
        if (binding.value || binding.value === undefined) {
          let classes = ['button', 'circle', 'block', 'float', 'light', 'classic']
            .filter(cls => binding.modifiers[cls])
            .map(cls => `waves-${cls}`)
          if (classes.length) {
            Waves.attach(el, classes)
          } else {
            Waves.attach(el)
          }
        }
      },
      update (el, binding) {
        _installObj.inserted(...arguments)
      }
    }
    Vue.directive(options.name, _installObj)
    Vue.mixin({
      created: function () {
        Waves.init(options)
      }
    })
  }
}