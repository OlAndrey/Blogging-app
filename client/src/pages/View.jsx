import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Typography } from '@mui/material'
import { connect } from 'react-redux'
import { selectPost } from '../store/actionts/post'
import Post from '../components/Post'
import Loading from '../components/Loading'
import HelperMessage from '../components/HelperMessage'

const View = ({ isLoading, isError, user, post, selectPost }) => {
  let params = useParams()

  useEffect(() => {
    selectPost(params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id])

  return (
    <Container fixed sx={{ padding: '4.5em 0 0 0' }}>
      {isLoading ? (
        <Loading />
      ) : isError || !post ? (
        <HelperMessage>
          <Typography variant="h4" component={'h3'}>
            Post not found!
          </Typography>
        </HelperMessage>
      ) : (
        <Post own={post.author === user._id} isSinglePost={true} article={post} />
      )}
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    isLoading: state.selectedPost.isLoading,
    isError: state.selectedPost.isError,
    post: state.selectedPost.postData
  }
}

export default connect(mapStateToProps, { selectPost })(View)
