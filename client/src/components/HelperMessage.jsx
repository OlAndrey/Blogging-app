import React from 'react'
import { Grid } from '@mui/material'

const HelperMessage = (props) => {
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
        {props.children}
      </Grid>
    </Grid>
  )
}

export default HelperMessage
