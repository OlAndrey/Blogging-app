import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { Stack } from '@mui/system'
import AddIcon from '@mui/icons-material/Add'
import {
  Alert,
  Box,
  Button,
  Container,
  Fab,
  Grid,
  Paper,
  Slide,
  TextField
} from '@mui/material'
import { changeInputPost, setAlertPost } from '../store/actionts/posts'

const PostForm = ({
  isLoading,
  alert,
  data,
  changeInputPost,
  setAlertPost,
  onSubmit,
  onCancel
}) => {
  const [alertVisibility, setAlertVisibility] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (alert) {
      setAlertVisibility(true)
      setTimeout(() => setAlertVisibility(false), 4000)
      setTimeout(() => setAlertPost(null), 5000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alert])

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
      <Paper variant="outlined" sx={{ padding: 2.5 }} ref={containerRef}>
        <Slide
          direction="down"
          timeout={1000}
          in={alertVisibility}
          container={containerRef.current}
        >
          {alert ? (
            <Alert
              severity={alert.type.toLowerCase()}
              sx={{
                width: '100%',
                margin: '.75em 0',
                zIndex: 1
              }}
            >
              {alert.message ? alert.message : alert.type}
            </Alert>
          ) : (
            <Box sx={{ height: '2.75em' }}></Box>
          )}
        </Slide>
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
            name="title"
            value={data.title}
            onChange={changeInputPost}
            required
            fullWidth
          />

          <TextField
            variant="outlined"
            label="Description"
            name="text"
            value={data.text}
            onChange={changeInputPost}
            required
            fullWidth
            multiline
            rows={3}
          />

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isLoading}
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="warning"
                onClick={onCancel}
                fullWidth
                disabled={isLoading}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Paper>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.posts.isLoading,
    alert: state.posts.alert,
    data: state.posts.inputs
  }
}

export default connect(mapStateToProps, { changeInputPost, setAlertPost })(
  PostForm
)
