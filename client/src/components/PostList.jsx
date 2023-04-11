import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Container, Typography } from '@mui/material'
import Post from './Post'
import Loading from './Loading'
import HelperMessage from './HelperMessage'

const PostList = ({
  isLoading,
  user,
  currentPage,
  totalPages,
  posts,
  getMorePosts
}) => {
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
            <Post own={post.author === user._id} key={key} article={post} />
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
    isLoading: state.postList.isLoading,
    totalPages: state.postList.totalPages,
    currentPage: state.postList.currentPage,
    posts: state.postList.postList
  }
}

export default connect(mapStateToProps, {})(PostList)
