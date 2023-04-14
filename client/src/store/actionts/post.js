import { POST, POST_COMMENT } from '../../types/posts'
import axios from '../../utils/axios'
import { commentEndpoint, getPostByIdEndpoint, postCommentEndpoint } from '../API/endpoints'

const setLoadingPost = (payload) => {
  return {
    type: POST.LOADING,
    payload
  }
}

const setLoadingComment = (payload) => {
  return {
    type: POST_COMMENT.LOADING,
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

const setPostComments = (comments) => {
  return {
    type: POST_COMMENT.SET_COMMENT,
    payload: comments
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

export const removePost = (id) => async (dispatch) => {
    try {
      dispatch(setErrorPost(false))
      dispatch(setLoadingPost(true))
      const res = await axios.delete(getPostByIdEndpoint(id))
  
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
  
  export const createComment = async (commentData) => {
    try {
      const res = await axios.post(commentEndpoint(commentData.postId), commentData)

      const data = res.data
      if (res.status === 200) {
        return data
      } else {
        throw Error(data.message)
      }
    } catch (error) {
      console.error(error)
    }
  }  

  export const getAllPostComments = (postId) => async (dispatch) => {
    try {
      dispatch(setLoadingComment(true))
      const res = await axios.get(commentEndpoint(postId))

      const data = res.data
      if (res.status === 200) {
        dispatch(setPostComments(data.comments))
        return data
      } else {
        throw Error(data.message)
      }
    } catch (error) {
      console.error(error)
    }finally{
      dispatch(setLoadingComment(false))
    }
  }