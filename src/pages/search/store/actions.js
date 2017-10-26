import * as types from './types'
import $ from 'jquery'

export const searchLoadingData = ({commit, state},keyword ) => {

  if (state.searching) return

  commit(types.SEARCHING, {
    keyword: keyword
  });
  //关闭 搜索 loading
  commit(types.SEARCHING_LOADING, {
    searching: true
  })
  var ajax = $.get('/api/search/index', {
    keyword: (state.keyword||'').replace(/^\s+|\s+$/g, '')
  }, replayData => {
    //关闭 搜索 loading
    commit(types.SEARCHING_LOADING, {
      searching: false
    })

    if (replayData.resultCode != 0) {
      this.$toast(replayData.errorMsg || '加载数据错误')
      return
    }
    //关闭 搜索 loading
    commit(types.SEARCHING_RESULT, {
      result: replayData.result
    })
  }, 'json')
  return ajax
}


