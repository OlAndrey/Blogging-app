import React, { useState } from 'react'
import { Button, Card, Container, Stack, TextField } from '@mui/material'
import { Box } from '@mui/system'
import Comment from './Comment'
// import theme from '../styles'

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

const CommentBlock = () => {
  const [commentTxt, setCommentTxt] = useState('')

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
                  bgcolor: "hsl(238, 40%, 52%)",
                  color: '#fff',
                  p: '8px 25px',
                  '&:hover': {
                    bgcolor: "hsl(239, 57%, 85%)"
                  }
                }}
              >
                Send
              </Button>
            </Stack>
          </Box>
        </Card>
        
        {data.map((comment, i) => {
          return <Comment key={i} commentData={comment} />;
        })}
      </Stack>
    </Container>
  )
}

export default CommentBlock
