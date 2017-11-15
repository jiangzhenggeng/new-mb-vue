export default function (Vue, Component) {
  let singleComponent
  let singleInstance

  return function (options, renderFn) {
    if (singleComponent) {
      singleInstance.updateRenderData(options)
      singleInstance.$forceUpdate()
      return singleComponent
    }
    options = typeof options == 'object' ? options : {}
    renderFn = typeof renderFn == 'function' ? renderFn : function () {
      return []
    }
    singleInstance = new Vue({
      name: 'createComponentApi',
      render (createElement) {
        return createElement(Component, options, renderFn(createElement))
      },
      methods: {
        init () {
          document.body.appendChild(this.$el)
        },
        destroy () {
          this.$destroy()
          document.body.removeChild(this.$el)
        }
      }
    })
    singleInstance.updateRenderData = function (data) {
      options = data
    }
    singleInstance.updateRenderData(options)
    singleInstance.$mount()
    singleInstance.init()
    singleComponent = singleInstance.$children[0]
    return singleComponent
  }
}


