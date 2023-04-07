import POSTS from '../../types/posts'
import axios from '../../utils/axios'
import { createPostEndpoint } from '../API/endpoints'

export const changeInputPost = (event) => {
  const name = event.target.name
  let value = null

  if (event.target.type === 'file') value = event.target.files[0]
  else value = event.target.value

  return {
    type: POSTS.CHANGE_INPUT,
    payload: {
      [name]: value
    }
  }
}

const clearPostForm = () => {
  return {
    type: POSTS.CLEAR_POST_FORM
  }
}

const setLoadingPost = (payload) => {
  return {
    type: POSTS.LOADING,
    payload
  }
}

export const setAlertPost = (payload) => {
  return {
    type: POSTS.SET_ALERT,
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
    dispatch(setAlertPost({ type: error.name, message: error.message }))
  } finally {
    dispatch(setLoadingPost(false))
  }
}
