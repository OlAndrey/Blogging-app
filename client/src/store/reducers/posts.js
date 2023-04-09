import POSTS from '../../types/posts'

const init = {
  isLoading: false,
  posts: []
}

const postsReduce = (state = init, action) => {
  switch (action.type) {
    case POSTS.LOADING:
      return {
        ...state,
        isLoading: action.payload
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
