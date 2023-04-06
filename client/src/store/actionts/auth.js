import AUTH from '../../types/auth'
import { getUserRequest, postRequest } from '../API/authAPI'

export const changeInput = (event) => {
  const { name, value } = event.target

  return {
    type: AUTH.CHANGE_INPUT,
    payload: {
      [name]: value
    }
  }
}

export const checkAuthError = (event) => {
  const { name, value } = event.target
  const regularEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/
  const regularPassword =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

  if (value.trim() === '')
    return {
      type: AUTH.CHANGE_ERROR,
      payload: { [name]: 'This field must be filled!!' }
    }

  switch (name) {
    case 'email':
      if (!regularEmail.test(value))
        return {
          type: AUTH.CHANGE_ERROR,
          payload: { [name]: 'Email is incorrect!!!' }
        }
      else
        return {
          type: AUTH.CHANGE_ERROR,
          payload: { [name]: '' }
        }
    case 'password':
      if (!regularPassword.test(value))
        return {
          type: AUTH.CHANGE_ERROR,
          payload: { [name]: 'Password is incorrect!!!' }
        }
      else
        return {
          type: AUTH.CHANGE_ERROR,
          payload: { [name]: '' }
        }

    default:
      return {
        type: AUTH.CHANGE_ERROR,
        payload: {}
      }
  }
}

export const setAuthError = (name, error) => {
  return {
    type: AUTH.SET_ERROR,
    payload: { [name]: error }
  }
}

const setLoading = (payload) => {
  return {
    type: AUTH.LOADING,
    payload
  }
}

const setToken = (token) => {
  return {
    type: AUTH.SET_TOKEN,
    payload: token
  }
}

export const setAlert = (payload) => {
  return {
    type: AUTH.SET_ALERT,
    payload
  }
}

export const selectionUser = (user) => {
  return {
    type: AUTH.SET_USER,
    payload: user
  }
}

export const register = (account) => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    return await postRequest('/api/auth/registration', account).then(
      async (res) => {
        const json = await res.json()
        if (res.status === 200) {
          dispatch(
            setAlert({
              type: 'Success',
              message: 'Account has been registered!'
            })
          )
          return json
        }
        if (res.status === 406) {
          dispatch(setAuthError('email', json.message))
          return
        }
        throw Error(json.message)
      }
    )
  } catch (error) {
    console.error(error)
    dispatch(setAlert({ type: error.name, message: error.message }))
  } finally {
    dispatch(setLoading(false))
  }
}

export const login = (account) => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    await postRequest('/api/auth/login', account).then(async (res) => {
      const json = await res.json()
      if (res.status === 200) {
        dispatch(selectionUser(json.user))
        dispatch(setToken(json.token))
        return json
      }
      if (res.status === 406) {
        dispatch(setAuthError('email', json.message))
        dispatch(setAuthError('password', json.message))
        return json
      }
      throw Error(json.message)
    })
  } catch (error) {
    console.error(error)
    dispatch(setAlert({ type: error.name, message: error.message }))
  } finally {
    dispatch(setLoading(false))
  }
}

export const logout = () => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    dispatch(selectionUser(null))
    dispatch(setToken(''))
  } catch (error) {
    console.error(error)
  } finally {
    dispatch(setLoading(false))
  }
}

export const getMe = (token) => async (dispatch) => {
  try {
    dispatch(setLoading(true))

    await getUserRequest('/api/auth/me').then(async (res) => {
      const json = await res.json()
      if (res.status === 200) {
        dispatch(selectionUser(json.user))
        dispatch(setToken(json.token))
      } else {
        throw Error(json.message)
      }
    })
  } catch (error) {
    console.error(error)
  } finally {
    dispatch(setLoading(false))
  }
}
