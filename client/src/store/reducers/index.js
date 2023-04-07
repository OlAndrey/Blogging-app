import { combineReducers } from 'redux'
import authReduce from './auth'
import postsReduce from './posts'

const rootReducer = combineReducers({
  auth: authReduce,
  posts: postsReduce
})

export default rootReducer
