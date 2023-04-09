import POSTS from '../../types/posts'
import axios from '../../utils/axios'
import { getAllPostsEndpoint } from '../API/endpoints'

const setLoadingPost = (payload) => {
  return {
    type: POSTS.LOADING,
    payload
  }
}

const setPosts = (posts) => {
    return{
        type: POSTS.SET_POSTS,
        payload: posts
    }
}

const addPosts = (posts) => {
    return{
        type: POSTS.ADD_POSTS,
        payload: posts
    }
}

export const getSomePosts = () => async (dispatch) => {
    try {
      dispatch(setLoadingPost(true))
      return await axios.get(getAllPostsEndpoint(1)).then(async (res) => {
        const json = res.data
        if (res.status === 200) {
          dispatch(setPosts(json.posts))
          return json
        }
        throw Error(json.message)
      })
    } catch (error) {
      console.error(error)
    } finally {
      dispatch(setLoadingPost(false))
    }
  }
  
export const getMorePosts = (page = 1) => async (dispatch) => {
    try {
      dispatch(setLoadingPost(true))
      return await axios.get(getAllPostsEndpoint(page)).then(async (res) => {
        const json = res.data
        if (res.status === 200) {
          dispatch(addPosts(json.posts))
          return json
        }
        throw Error(json.message)
      })
    } catch (error) {
      console.error(error)
    } finally {
      dispatch(setLoadingPost(false))
    }
  }
