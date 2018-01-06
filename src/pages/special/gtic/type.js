import Vue from 'vue'
import EventProxy from 'vue-jui/src/modules/event-proxy'

Vue.use(EventProxy)

import Index from './pages/type'
import store from './store'

require('./../../boot')({
	store,
	render: _ => _(Index)
})

