import { POST } from '../../types/posts'
import axios from '../../utils/axios'
import { getPostByIdEndpoint } from '../API/endpoints'

const setLoadingPost = (payload) => {
  return {
    type: POST.LOADING,
    payload
  }
}

const setErrorPost = (payload) => {
  return {
    type: POST.LOADING,
    payload
  }
}

const setPost = (post) => {
  return {
    type: POST.SET_POST,
    payload: post
  }
}

export const clearPost = () => {
  return {
    type: POST.CLEAR
  }
}

export const selectPost = (id) => async (dispatch) => {
  try {
    dispatch(setErrorPost(false))
    dispatch(setLoadingPost(true))
    const res = await axios.get(getPostByIdEndpoint(id))

    const data = res.data
    if (res.status === 200) {
      dispatch(setPost(data.post))
    } else {
      throw Error(data.message)
    }
  } catch (error) {
    console.error(error)
    dispatch(clearPost())
    dispatch(setErrorPost(true))
  } finally {
    dispatch(setLoadingPost(false))
  }
}
