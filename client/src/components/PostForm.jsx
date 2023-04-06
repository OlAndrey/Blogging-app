import React, { useState } from 'react'
import { Box, Button, Container, Fab, Paper, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import AddIcon from '@mui/icons-material/Add'

const PostForm = ({ data = {}, onSubmit }) => {
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const handleSubmit = () => {
    const data = {
      title,
      text
    }

    onSubmit(data)
  }

  return (
    <Container fixed sx={{ padding: '4.5em 0 0 0' }}>
      <Paper variant="outlined" sx={{ padding: 2.5 }}>
        <label htmlFor="upload-photo" className="select-photo">
          <input
            style={{ display: 'none' }}
            id="upload-photo"
            name="upload-photo"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <Fab
            color="secondary"
            size="small"
            component="span"
            aria-label="add"
            variant="extended"
          >
            <AddIcon /> Upload photo
          </Fab>
        </label>

        <Box paddingY={2} maxWidth={'100%'}>
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="select img"
              className="previev-img"
            />
          )}
        </Box>

        <Stack spacing={4}>
          <TextField
            variant="outlined"
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />

          <TextField
            variant="outlined"
            label="Description"
            value={text}
            onChange={(e) => setText(e.target.value)}
            fullWidth
            multiline
            rows={3}
          />

          <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </Stack>
      </Paper>
    </Container>
  )
}

export default PostForm
