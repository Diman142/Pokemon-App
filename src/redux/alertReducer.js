import { SHOW_SEARCH_ALERT, HIDE_SEARCH_ALERT, SHOW_SERVER_ALERT, HIDE_SERVER_ALERT } from './types'

const initialState = {
  isSearchAlert: false,
  isServerAlert: false
}

export const alertRuducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SEARCH_ALERT:
      return { ...state, isSearchAlert: true }
    case HIDE_SEARCH_ALERT:
      return { ...state, isSearchAlert: false }
    case SHOW_SERVER_ALERT:
      return { ...state, isServerAlert: true }
    case HIDE_SERVER_ALERT:
      return { ...state, isServerAlert: false }
    default: return state
  }
}
