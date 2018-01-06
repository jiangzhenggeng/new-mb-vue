/**
 * Created by jiangzg on 2017/7/18.
 */

import * as types from './types'

const mutations = {
  [types.PAGE_LOADING_QUERY] (state, {show}) {
    state.show = show
  },
  [types.PAGE_ROUTER_LOADING] (state, val) {
    state['page-router-loading'] = val
  },
  [types.getuserlist](state, val){
		state.getuserlist = val
  }
}
export default mutations