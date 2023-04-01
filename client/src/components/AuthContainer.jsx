import React from 'react'
import { Grid, CssBaseline, Paper } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useAuthContainer } from '../styles/authStyles'

const theme = createTheme()

const AuthContainer = (props) => {
  const classes = useAuthContainer()

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid
          className={classes.size}
          item
          xs={12}
          sm={8}
          md={6}
          component={Paper}
          elevation={1}
          square
        >
          <div className={classes.paper}>{props.children}</div>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default AuthContainer
