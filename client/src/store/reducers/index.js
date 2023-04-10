import { combineReducers } from 'redux'
import authReduce from './auth'
import postListReduce from './postList'
import postFormReduce from './postForm'
import selectedPostReduce from './selectedPost'

const rootReducer = combineReducers({
  auth: authReduce,
  postForm: postFormReduce,
  postList: postListReduce,
  selectedPost: selectedPostReduce
})

export default rootReducer
