import React from 'react'
import { connect } from 'react-redux'
import { Grid, Avatar, Link, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import AuthForm from '../components/AuthForm'
import AuthContainer from '../components/AuthContainer'
import {
  changeInput,
  checkAuthError,
  setAuthError,
  selectionUser
} from '../store/actionts/auth'
import { users } from '../const/users'

const SignIn = ({
  inputs,
  errors,
  changeInput,
  checkAuthError,
  setAuthError,
  selectionUser
}) => {
  const isVarifiedUser = (email, password) => {
    return users.find(
      (user) => user.email === email && user.password === password
    )
  }

  const handelLogin = (event) => {
    event.preventDefault()
    const user = isVarifiedUser(inputs.email, inputs.password)
    if (user) {
        console.log(user)
      selectionUser(user)
    } else {
      setAuthError('password', 'Email or password is incorrect!!!')
      setAuthError('email', 'Email or password is incorrect!!!')
    }
  }

  return (
    <AuthContainer>
      <Avatar>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <AuthForm
        error={errors}
        handelLogin={handelLogin}
        handlerInput={changeInput}
        values={inputs}
        checkError={checkAuthError}
      />
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

const mapStateToProps = (state) => {
  return {
    inputs: state.auth.inputs,
    errors: state.auth.errorInputs
  }
}

export default connect(mapStateToProps, {
  changeInput,
  checkAuthError,
  setAuthError,
  selectionUser
})(SignIn)
