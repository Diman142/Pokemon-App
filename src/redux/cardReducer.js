/* eslint-disable import/prefer-default-export */
import { GET_DATA } from './types'

const initialState = {
  listData: []
}

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, listData: action.payload }
    default: return state
  }
}
