import { POST } from '../../types/posts'

const init = {
  isLoading: false,
  isError: false,
  postData: null
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

    default:
      return state
  }
}

export default selectedPostReduce
