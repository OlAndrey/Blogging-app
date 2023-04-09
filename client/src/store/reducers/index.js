import { combineReducers } from 'redux'
import authReduce from './auth'
import postsReduce from './posts'
import postFormReduce from './postForm'

const rootReducer = combineReducers({
  auth: authReduce,
  postForm: postFormReduce,
  posts: postsReduce
})

export default rootReducer
