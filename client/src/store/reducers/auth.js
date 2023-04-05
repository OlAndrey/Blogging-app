import AUTH from '../../types/auth'

const init = {
  user: null,
  token: '',
  isLoading: false,
  alert: null,
  errorInputs: {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  },
  inputs: {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
}

const authReduce = (state = init, action) => {
  switch (action.type) {
    case AUTH.CHANGE_INPUT:
      return {
        ...state,
        inputs: Object.assign({}, state.inputs, action.payload)
      }

    case AUTH.SET_ERROR:
    case AUTH.CHANGE_ERROR:
      return {
        ...state,
        errorInputs: Object.assign({}, state.errorInputs, action.payload)
      }

    case AUTH.SET_ALERT:
        return {
            ...state,
            alert: action.payload
        }

    case AUTH.SET_USER:
      return {
        ...state,
        user: action.payload
      }

    case AUTH.LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    case AUTH.SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }

    default:
      return state
  }
}

export default authReduce
