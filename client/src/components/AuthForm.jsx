import React from 'react'
import { connect } from 'react-redux'
import { Grid, Button, TextField, Alert } from '@mui/material'
import { changeInput, checkAuthError } from '../store/actionts/auth'

const RenderTextField = ({
  name,
  label,
  handlerInput,
  checkError,
  error,
  value
}) => {
  return (
    <TextField
      margin="dense"
      variant="outlined"
      required
      label={label}
      onChange={handlerInput}
      onBlur={checkError}
      name={name}
      id={name}
      value={value}
      error={Boolean(error)}
      helperText={error}
      type={label === 'Password' ? 'password' : 'text'}
      fullWidth
    />
  )
}

const AuthForm = ({
  isNewUser,
  isLoading,
  values,
  errors,
  alert,
  changeInput,
  checkAuthError,
  handelLogin
}) => {
  return (
    <>
      {alert && (
        <Alert severity={alert.type.toLowerCase()} sx={{ width: '100%', margin: '1em 0' }}>
          {alert.message}
        </Alert>
      )}
      <form onSubmit={(event) => handelLogin(event, values)}>
        <Grid container spacing={2}>
          {isNewUser && (
            <>
              <Grid item xs={12} sm={6}>
                <RenderTextField
                  handlerInput={changeInput}
                  checkError={checkAuthError}
                  name="firstName"
                  label="First Name"
                  value={values.firstName}
                  error={errors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <RenderTextField
                  handlerInput={changeInput}
                  checkError={checkAuthError}
                  name="lastName"
                  label="Last Name"
                  value={values.lastName}
                  error={errors.lastName}
                />
              </Grid>
            </>
          )}
          <Grid item xs={12}>
            <RenderTextField
              handlerInput={changeInput}
              checkError={checkAuthError}
              name="email"
              label="Email Address"
              value={values.email}
              error={errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <RenderTextField
              handlerInput={changeInput}
              checkError={checkAuthError}
              name="password"
              label="Password"
              value={values.password}
              error={errors.password}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ margin: '1em 0' }}
          disabled={isLoading}
        >
          {isNewUser ? 'Sign Up' : 'Sign In'}
        </Button>
      </form>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.auth.isLoading,
    alert: state.auth.alert,
    values: state.auth.inputs,
    errors: state.auth.errorInputs
  }
}

export default connect(mapStateToProps, {
  changeInput,
  checkAuthError
})(AuthForm)
