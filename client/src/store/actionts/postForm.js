import { POST_FORM } from '../../types/posts'
import axios from '../../utils/axios'
import { createPostEndpoint, getPostByIdEndpoint } from '../API/endpoints'

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

const setInputPost = (name, value) => {
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

export const getPostForUpdatePost = (id) => async (dispatch) => {
  try {
    dispatch(setLoadingPost(true))
    return await axios.get(getPostByIdEndpoint(id)).then(async (res) => {
      const json = res.data
      if (res.status === 200) {
        const { title, text, imgUrl } = json.post
        dispatch(setInputPost('title', title))
        dispatch(setInputPost('text', text))
        dispatch(setInputPost('imgUrl', imgUrl))
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

export const updatePost = (postData, id) => async (dispatch) => {
  try {
    dispatch(setLoadingPost(true))
    return await axios.put(getPostByIdEndpoint(id), postData).then(async (res) => {
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
