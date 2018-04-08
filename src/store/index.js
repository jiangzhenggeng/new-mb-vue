import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import * as actions from './actions'
import mutations from './mutations'
import search from './../pages/search/store'

if (process.env.vuex !== 'Vuex') {
	Vue.use(Vuex)
}

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
	state: {},
	actions,
	mutations,
	modules: {
		search
	},
	strict: debug,
	plugins: debug ? [createLogger()] : []
})

export default store
