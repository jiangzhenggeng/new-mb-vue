import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import * as actions from './actions'
import mutations from './mutations'

if (process.env.vuex !== 'Vuex') {
	Vue.use(Vuex)
}

const initState = {
	//页面加载提示
	show: true,
	getuserlist: {}
}
const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
	state: initState,
	actions,
	mutations,
	strict: debug,
	plugins: debug ? [createLogger()] : []
})

export default store
