import { POST_FORM } from '../../types/posts'

const init = {
  isLoading: false,
  alert: null,
  inputs: {
    image: null,
    title: '',
    text: ''
  }
}

const postFormReduce = (state = init, action) => {
  switch (action.type) {
    case POST_FORM.CHANGE_INPUT:
      return {
        ...state,
        inputs: Object.assign({}, state.inputs, action.payload)
      }

    case POST_FORM.CLEAR:
      return {
        ...state,
        inputs: {
          image: null,
          title: '',
          text: ''
        }
      }

    case POST_FORM.SET_ALERT:
      return {
        ...state,
        alert: action.payload
      }

    case POST_FORM.LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    default:
      return state
  }
}

export default postFormReduce
