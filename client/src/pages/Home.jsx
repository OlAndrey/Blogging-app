import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import PostList from '../components/PostList'
import { getSomePosts, getMorePosts } from '../store/actionts/postList'

const Home = (props) => {
  const dispatch = useDispatch()
  const loadingRef = useRef(false)

  useEffect(() => {
    if (!loadingRef.current) {
      dispatch(getSomePosts()) 
      loadingRef.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getMorePostsAction = (page) => {
    dispatch(getMorePosts(page))
  }

 return (
    <PostList getMorePosts={getMorePostsAction}/>
  )
}

const HomeMemo = React.memo(Home)

export default HomeMemo
