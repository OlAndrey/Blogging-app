import React from 'react'
import { CircularProgress, Grid } from '@mui/material'

const Loading = (props) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 5em)' }}
    >
      <Grid item xs={3}>
        <CircularProgress size={60} />
      </Grid>
    </Grid>
  )
}

export default Loading
