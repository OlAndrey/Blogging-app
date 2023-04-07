import POSTS from '../../types/posts'

const init = {
  isLoading: false,
  alert: null,
  inputs: {
    image: null,
    title: '',
    text: ''
  }
}

const postsReduce = (state = init, action) => {
  switch (action.type) {
    case POSTS.CHANGE_INPUT:
      return {
        ...state,
        inputs: Object.assign({}, state.inputs, action.payload)
      }

    case POSTS.CLEAR_POST_FORM:
      return {
        ...state,
        inputs: {
          image: null,
          title: '',
          text: ''
        }
      }

    case POSTS.SET_ALERT:
      return {
        ...state,
        alert: action.payload
      }

    case POSTS.LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    default:
      return state
  }
}

export default postsReduce
