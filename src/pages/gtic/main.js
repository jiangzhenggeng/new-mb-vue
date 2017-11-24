import App from './app.vue'
import store from './../../store'

require('./../boot')({
  store,
  render: _ => _(App)
})

