import React from 'react'
import { connect } from 'react-redux'
import { Grid, Avatar, Link, Typography, Box } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import AuthForm from '../components/AuthForm'
import AuthContainer from '../components/AuthContainer'
import { login } from '../store/actionts/auth'
import { useAuthStyles } from '../styles/authStyles'

const SignIn = ({ login }) => {
  const classes = useAuthStyles()
  const handelLogin = (event, inputs) => {
    event.preventDefault()
    login(inputs)
  }

  return (
    <AuthContainer>
      <Box className={classes.box}>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
      </Box>

      <AuthForm handelLogin={handelLogin} />
      <Grid container>
        <Grid item>
          <Link href="/registration" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </AuthContainer>
  )
}

export default connect((state) => ({}), {
  login
})(SignIn)
