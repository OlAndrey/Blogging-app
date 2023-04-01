import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Grid, Avatar, Link, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import AuthForm from '../components/AuthForm'
import AuthContainer from '../components/AuthContainer'
import { register } from '../store/actionts/auth'
import { Box } from '@mui/system'
import { useAuthStyles } from '../styles/authStyles'

const SignUp = ({ register }) => {
  const classes = useAuthStyles()
  const navigate = useNavigate()
  const handelLogin = (event, inputs) => {
    event.preventDefault()
    register(inputs).then((data) => {
      if (data) navigate('/')
    })
  }

  return (
    <AuthContainer>
      <Box className={classes.box}>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
      </Box>
      <AuthForm isNewUser={true} handelLogin={handelLogin} />

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

export default connect((state) => ({}), { register })(SignUp)
