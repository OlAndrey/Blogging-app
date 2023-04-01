import React from 'react'
import { connect } from 'react-redux'
import { Grid, Avatar, Link, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import AuthForm from '../components/AuthForm'
import AuthContainer from '../components/AuthContainer'
import { login } from '../store/actionts/auth'

const SignIn = ({ login }) => {
  const handelLogin = (event, inputs) => {
    event.preventDefault()
    login(inputs)
  }

  return (
    <AuthContainer>
      <Avatar>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
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
