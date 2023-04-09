import POSTS from '../../types/posts'

const init = {
  isLoading: false,
  totalPages: 0,
  currentPage: 0,
  posts: []
}

const postsReduce = (state = init, action) => {
  switch (action.type) {
    case POSTS.LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    case POSTS.SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload
      }

    case POSTS.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }

    case POSTS.ADD_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...action.payload]
      }

    case POSTS.SET_POSTS:
      return {
        ...state,
        posts: [...action.payload]
      }

    default:
      return state
  }
}

export default postsReduce
