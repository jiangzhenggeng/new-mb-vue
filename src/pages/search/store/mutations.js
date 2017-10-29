/**
 * Created by jiangzg on 2017/7/18.
 */

import * as types from './types'

const mutations = {
  [types.SEARCHING_CHANGE_KEYWORD] (state, {keyword}) {
    state.keyword = keyword
  }
}
export default mutations