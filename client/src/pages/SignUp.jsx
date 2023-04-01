import React from 'react'
import { connect } from 'react-redux'
import { Grid, Avatar, Link, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import AuthForm from '../components/AuthForm'
import AuthContainer from '../components/AuthContainer'
import { users } from '../const/users'
import {
  changeInput,
  checkAuthError,
  setAuthError
} from '../store/actionts/auth'

const SignUp = ({
  inputs,
  errors,
  changeInput,
  checkAuthError,
  setAuthError
}) => {
  const isRegistryUser = (email) => {
    return users.find((user) => user.email === email)
  }

  const handelLogin = (event) => {
    event.preventDefault()
    if (!Object.values(inputs).find((item) => item === '')) {
      if (!isRegistryUser(inputs.email)) {
        users.push(inputs)
      } else
        setAuthError(
          'email',
          'The email address is already in use by another account'
        )
    }
  }

  return (
    <AuthContainer>
      <Avatar>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>

      <AuthForm
        isNewUser={true}
        error={errors}
        handelLogin={handelLogin}
        handlerInput={changeInput}
        values={inputs}
        checkError={checkAuthError}
      />

      <Grid container justify="flex-end">
        <Grid item>
          <Link href="/" variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </AuthContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    inputs: state.auth.inputs,
    errors: state.auth.errorInputs
  }
}

export default connect(mapStateToProps, {
  changeInput,
  checkAuthError,
  setAuthError
})(SignUp)
