import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import PostList from '../components/PostList'
import { getSomeMyPosts, getMoreMyPosts } from '../store/actionts/postList'

const MyPosts = (props) => {
  const dispatch = useDispatch()
  const loadingRef = useRef(false)

  useEffect(() => {
    if (!loadingRef.current) {
      dispatch(getSomeMyPosts()) 
      loadingRef.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getMorePostsAction = (page) => {
    dispatch(getMoreMyPosts(page))
  }

 return (
    <PostList getMorePosts={getMorePostsAction}/>
  )
}


export default MyPosts
