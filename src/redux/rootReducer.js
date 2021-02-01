import { combineReducers } from 'redux'
import { loaderReducer } from './loadreducer'
import { cardReducer } from './cardReducer'
import { listReducer } from './listReducer'
import { pageReducer } from './pageReducer'
import { alertRuducer } from './alertReducer'

const rootReducer = combineReducers({
  setIsLoaded: loaderReducer,
  getCards: cardReducer,
  getLists: listReducer,
  goToPage: pageReducer,
  toggleAlert: alertRuducer
})


export default rootReducer
