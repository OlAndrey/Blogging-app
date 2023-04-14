import { POST, POST_COMMENT } from '../../types/posts'

const init = {
  isLoading: false,
  isLoadingComment: false,
  isError: false,
  postData: null,
  comments: []
}

const selectedPostReduce = (state = init, action) => {
  switch (action.type) {
    case POST.LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    case POST.ERROR:
      return {
        ...state,
        isError: action.payload
      }

    case POST.SET_POST:
      return {
        ...state,
        postData: action.payload
      }

    case POST.CLEAR:
      return {
        ...state,
        postData: null
      }

    case POST_COMMENT.LOADING:
      return {
        ...state,
        isLoadingComment: action.payload
      }

    case POST_COMMENT.SET_COMMENT:
      return {
        ...state,
        comments: action.payload
      }

    default:
      return state
  }
}

export default selectedPostReduce
