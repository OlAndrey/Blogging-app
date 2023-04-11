import { POST_LIST } from '../../types/posts'
import axios from '../../utils/axios'
import { getAllPostsEndpoint, getMyPostsEndpoint } from '../API/endpoints'

const setLoadingPost = (payload) => {
  return {
    type: POST_LIST.LOADING,
    payload
  }
}

const setPosts = (posts) => {
  return {
    type: POST_LIST.SET_POSTS,
    payload: posts
  }
}

const setTotalPages = (number) => {
  return {
    type: POST_LIST.SET_TOTAL_PAGES,
    payload: +number
  }
}

const setCurrentPage = (number) => {
  return {
    type: POST_LIST.SET_CURRENT_PAGE,
    payload: +number
  }
}

const addPosts = (posts) => {
  return {
    type: POST_LIST.ADD_POSTS,
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
        dispatch(setCurrentPage(json.currentPage))
        dispatch(setTotalPages(json.totalPages))
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

export const getSomeMyPosts = () => async (dispatch) => {
  try {
    dispatch(setLoadingPost(true))
    return await axios.get(getMyPostsEndpoint(1)).then(async (res) => {
      const json = res.data
      if (res.status === 200) {
        dispatch(setPosts(json.list))
        dispatch(setCurrentPage(json.currentPage))
        dispatch(setTotalPages(json.totalPages))
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

export const getMorePosts =
  (page = 1) =>
  async (dispatch) => {
    try {
      dispatch(setLoadingPost(true))
      return await axios.get(getAllPostsEndpoint(page)).then(async (res) => {
        const json = res.data
        if (res.status === 200) {
          dispatch(addPosts(json.posts))
          dispatch(setCurrentPage(json.currentPage))
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

  export const getMoreMyPosts =
  (page = 1) =>
  async (dispatch) => {
    try {
      dispatch(setLoadingPost(true))
      return await axios.get(getMyPostsEndpoint(page)).then(async (res) => {
        const json = res.data
        if (res.status === 200) {
          dispatch(addPosts(json.posts))
          dispatch(setCurrentPage(json.currentPage))
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
