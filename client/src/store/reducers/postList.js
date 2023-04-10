import { POST_LIST } from '../../types/posts'

const init = {
  isLoading: false,
  totalPages: 0,
  currentPage: 0,
  postList: []
}

const postListReduce = (state = init, action) => {
  switch (action.type) {
    case POST_LIST.LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    case POST_LIST.SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload
      }

    case POST_LIST.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }

    case POST_LIST.ADD_POSTS:
      return {
        ...state,
        postList: [...state.postList, ...action.payload]
      }

    case POST_LIST.SET_POSTS:
      return {
        ...state,
        postList: [...action.payload]
      }

    default:
      return state
  }
}

export default postListReduce
