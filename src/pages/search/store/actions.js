import * as types from './types'

export const searchChangeKeyword = ({commit}, {keyword}) => {
  commit(types.SEARCHING_CHANGE_KEYWORD, {
    keyword: keyword
  })
}


