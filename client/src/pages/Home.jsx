import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import PostsList from '../components/PostsList'
import { CircularProgress, Container, Grid, Typography } from '@mui/material'
import { getSomePosts } from '../store/actionts/posts'

const Home = ({ isLoading, user, posts, getSomePosts }) => {
  const loadingRef = useRef(false)

  useEffect(() => {
    if(!loadingRef.current){
      getSomePosts()
      loadingRef.current = true
    }
  }, [])

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
      ) : (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: 'calc(100vh - 5em)' }}
        >
          <Grid item xs={3}>
            {isLoading ? (
              <CircularProgress size={60} />
            ) : (
              <Typography variant='h4' component={'h3'}>Posts not found!</Typography>
            )}
          </Grid>
        </Grid>
      )}
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    isLoading: state.posts.isLoading,
    posts: state.posts.posts
  }
}

export default connect(mapStateToProps, { getSomePosts })(Home)
