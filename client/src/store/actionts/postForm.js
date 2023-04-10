import { POST_FORM } from '../../types/posts'
import axios from '../../utils/axios'
import { createPostEndpoint } from '../API/endpoints'

export const changeInputPost = (event) => {
  const name = event.target.name
  let value = null

  if (event.target.type === 'file') value = event.target.files[0]
  else value = event.target.value

  return {
    type: POST_FORM.CHANGE_INPUT,
    payload: {
      [name]: value
    }
  }
}

export const clearPostForm = () => {
  return {
    type: POST_FORM.CLEAR
  }
}

const setLoadingPost = (payload) => {
  return {
    type: POST_FORM.LOADING,
    payload
  }
}

export const setAlertPost = (payload) => {
  return {
    type: POST_FORM.SET_ALERT,
    payload
  }
}

export const createPost = (postData) => async (dispatch) => {
  try {
    dispatch(setLoadingPost(true))
    return await axios.post(createPostEndpoint, postData).then(async (res) => {
      const json = res.data
      if (res.status === 200) {
        dispatch(clearPostForm())
        return json
      }
      throw Error(json.message)
    })
  } catch (error) {
    console.error(error)
    dispatch(
      setAlertPost({ type: 'Error', message: error?.response?.data?.message })
    )
  } finally {
    dispatch(setLoadingPost(false))
  }
}
