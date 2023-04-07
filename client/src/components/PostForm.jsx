import React from 'react'
import { connect } from 'react-redux'
import { Box, Button, Container, Fab, Paper, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { Stack } from '@mui/system'
import { changeInputPost } from '../store/actionts/posts'

const PostForm = ({ isLoading, data, changeInputPost, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const postData = new FormData()
    postData.append('image', data.image)
    postData.append('title', data.title)
    postData.append('text', data.text)

    onSubmit(postData)
  }

  return (
    <Container fixed sx={{ padding: '4.5em 0 0 0' }}>
      <Paper variant="outlined" sx={{ padding: 2.5 }}>
        <label htmlFor="upload-photo" className="select-photo">
          <input
            style={{ display: 'none' }}
            id="upload-photo"
            name="image"
            type="file"
            onChange={changeInputPost}
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
          {data.image && (
            <img
              src={URL.createObjectURL(data.image)}
              alt="select img"
              className="previev-img"
            />
          )}
        </Box>

        <Stack spacing={4} component="form" onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            label="Title"
            name='title'
            value={data.title}
            onChange={changeInputPost}
            required
            fullWidth
          />

          <TextField
            variant="outlined"
            label="Description"
            name='text'
            value={data.text}
            onChange={changeInputPost}
            required
            fullWidth
            multiline
            rows={3}
          />

          <Button type='submit' variant="contained" disabled={isLoading}>
            Submit
          </Button>
        </Stack>
      </Paper>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.posts.isLoading,
    data: state.posts.inputs
  }
}

export default connect(mapStateToProps, { changeInputPost })(PostForm)
