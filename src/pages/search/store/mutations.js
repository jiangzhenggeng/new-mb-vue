/**
 * Created by jiangzg on 2017/7/18.
 */

import * as types from './types'

const mutations = {
  [types.SEARCHING] (state, {keyword}) {
    state.keyword = keyword
  },
  [types.SEARCHING_LOADING] (state, {searching}) {
    state.searching = searching
  },
  [types.SEARCHING_RESULT] (state, {result}) {
    state.result = result
  },
}
export default mutations