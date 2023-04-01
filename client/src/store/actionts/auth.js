import { AUTH_CHANGE_ERROR, AUTH_CHANGE_INPUT, AUTH_SET_ERROR, AUTH_SET_USER } from '../../types/auth'

export const changeInput = (event) => {
  const { name, value } = event.target

  return {
    type: AUTH_CHANGE_INPUT,
    payload: {
      [name]: value
    }
  }
}

export const checkAuthError = (event) => {
  const { name, value } = event.target
  const regularEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/
  const regularPassword = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

  if (value.trim() === '')
    return {
      type: AUTH_CHANGE_ERROR,
      payload: { [name]: 'This field must be filled!!' }
    }

  switch (name) {
    case 'email':
      if (!regularEmail.test(value))
        return {
          type: AUTH_CHANGE_ERROR,
          payload: { [name]: 'Email is incorrect!!!' }
        }
      else
        return {
          type: AUTH_CHANGE_ERROR,
          payload: { [name]: '' }
        }
    case 'password':
      if (!regularPassword.test(value))
        return {
          type: AUTH_CHANGE_ERROR,
          payload: { [name]: 'Password is incorrect!!!' }
        }
      else
        return {
          type: AUTH_CHANGE_ERROR,
          payload: { [name]: '' }
        }

    default:
        return {
          type: AUTH_CHANGE_ERROR,
          payload: {  }
        }
  }
}

export const setAuthError = (name, error ) =>{
    console.log('err')
    return {
      type: AUTH_SET_ERROR,
      payload: { [name]: error }
    }

}

export const selectionUser = (user) => {
    return {
        type: AUTH_SET_USER,
        payload: user
    }
}