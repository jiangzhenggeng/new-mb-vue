import * as actions from './actions'
import mutations from './mutations'

const state = {
  //请求地址
  search_url: '',
  //搜索关键词
  keyword: '',
  //搜索状态
  searching: false,
  //首页搜索结果
  result: {},
  //试用
  event: [],
  //文章
  blog: []
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
