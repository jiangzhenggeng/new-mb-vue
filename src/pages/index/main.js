import App from './app.vue'
import store from './../store'
import router from './../router'

require('./boot')({
  router,
  store,
  render: _ => _(App)
})

