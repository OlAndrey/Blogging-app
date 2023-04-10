import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import PostsList from '../components/PostsList'
import { Container, Typography } from '@mui/material'
import { getSomePosts, getMorePosts } from '../store/actionts/postList'
import Loading from '../components/Loading'
import HelperMessage from '../components/HelperMessage'

const Home = ({
  isLoading,
  user,
  currentPage,
  totalPages,
  posts,
  getSomePosts,
  getMorePosts
}) => {
  const loadingRef = useRef(false)

  useEffect(() => {
    if (!loadingRef.current) {
      getSomePosts()
      loadingRef.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const scrollHandler = () => {
    const containerHeight = document.documentElement.clientHeight
    const { scrollHeight } = document.documentElement

    const { scrollTop } = document.documentElement
    const currentPosition = ((scrollTop + containerHeight) / scrollHeight) * 100
    if (
      !(currentPosition < 95) &&
      currentPage + 1 <= totalPages &&
      !isLoading
    ) {
      getMorePosts(currentPage + 1)
    }
  }

  useEffect(() => {
    if (currentPage) document.addEventListener('scroll', scrollHandler)
    return () => document.removeEventListener('scroll', scrollHandler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, isLoading])

  return (
    <Container fixed sx={{ padding: '4.5em 0 0 0' }}>
      {posts.length ? (
        posts.map((post, key) => {
          return (
            <PostsList
              own={post.author === user._id}
              key={key}
              article={post}
            />
          )
        })
      ) : isLoading ? (
        <Loading />
      ) : (
        <HelperMessage>
          <Typography variant="h4" component={'h3'}>
            Posts not found!
          </Typography>
        </HelperMessage>
      )}
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    isLoading: state.posts.isLoading,
    totalPages: state.posts.totalPages,
    currentPage: state.posts.currentPage,
    posts: state.posts.posts
  }
}

export default connect(mapStateToProps, { getSomePosts, getMorePosts })(Home)
