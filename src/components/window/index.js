import Confirm from './confirm.vue'
import Loading from './loading.vue'
import Toast from './toast.vue'

import CompontentInstallApi from './../CompontentApi'

export default {
  install: function (Vue) {
    [
      Confirm,
      Loading,
      Toast
    ].forEach((Component) => {
      Vue.component(Component.name, Component)
      Vue.prototype[Component.name] = CompontentInstallApi(Vue, Component)
    })
  }
}


