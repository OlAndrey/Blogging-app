import { combineReducers } from 'redux'
import authReduce from './auth'

const rootReducer = combineReducers({
  auth: authReduce
})

export default rootReducer
