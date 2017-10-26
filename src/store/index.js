import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger'
import * as actions from './actions';
import mutations from './mutations';
import search from './../pages/search/store';

Vue.use(Vuex);

const initState = {
	//页面加载提示
	show: true
};
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
	state: initState,
	actions,
	mutations,
  modules:{
    search
	},
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
