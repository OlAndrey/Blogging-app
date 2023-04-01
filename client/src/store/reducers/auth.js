import { AUTH_CHANGE_ERROR, AUTH_CHANGE_INPUT, AUTH_SET_ERROR, AUTH_SET_USER } from '../../types/auth'

const init = {
  user: {},
  token: '',
  isLoading: false,
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
    case AUTH_CHANGE_INPUT:
      return {
        ...state,
        inputs: Object.assign({}, state.inputs, action.payload)
      }

    case AUTH_SET_ERROR:
    case AUTH_CHANGE_ERROR:
        return {
            ...state,
            errorInputs: Object.assign({}, state.errorInputs, action.payload)
        }

    case AUTH_SET_USER:
        return{
            ...state,
            user: action.payload
        }

    default:
      return state
  }
}

export default authReduce
