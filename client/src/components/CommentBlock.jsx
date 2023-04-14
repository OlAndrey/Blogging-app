import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Card,
  Container,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import { Box } from '@mui/system'
import Comment from './Comment'
import { createComment } from '../store/actionts/post'
import Loading from './Loading'
import HelperMessage from './HelperMessage'

const data = [
  {
    Comment: 'Hi',
    authorName: 'Oleynik',
    createdAt: new Date()
  },
  {
    Comment: 'test',
    authorName: 'me',
    createdAt: new Date()
  },
  {
    Comment: 'message',
    authorName: 'Oleynik',
    createdAt: new Date()
  }
]

const CommentBlock = ({ isLoading, postId, comments, createComment }) => {
  const [commentTxt, setCommentTxt] = useState('')
  const [loading, setLoading] = useState(false)

  const handlerCreateComment = (e) => {
    e.preventDefault()
    if (commentTxt.trim()) {
      setLoading(true)
      createComment({ postId, comment: commentTxt }).then((res) => {
        if (res) setCommentTxt('')
        setLoading(false)
      })
    }
  }

  return (
    <Container fixed>
      <Stack spacing={3} my={4}>
        <Card>
          <Box sx={{ p: '15px' }}>
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <TextField
                multiline
                fullWidth
                minRows={3}
                placeholder="Add a comment"
                value={commentTxt}
                onChange={(e) => {
                  setCommentTxt(e.target.value)
                }}
              />
              <Button
                size="large"
                sx={{
                  bgcolor: 'hsl(238, 40%, 52%)',
                  color: '#fff',
                  p: '8px 25px',
                  '&:hover': {
                    bgcolor: 'hsl(239, 57%, 85%)'
                  }
                }}
                disabled={loading}
                onClick={handlerCreateComment}
              >
                Send
              </Button>
            </Stack>
          </Box>
        </Card>

        {isLoading ? (
          <Loading />
        ) : data.length ? (
          data.map((comment, i) => {
            return <Comment key={i} commentData={comment} />
          })
        ) : (
          <HelperMessage>
            <Typography variant="h4" component={'h3'}>
              No comments yet!
            </Typography>
          </HelperMessage>
        )}
      </Stack>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.selectedPost.isLoadingComment,
    comments: state.selectedPost.comments
  }
}

export default connect(mapStateToProps, { createComment })(CommentBlock)
