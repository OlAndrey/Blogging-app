import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { getMe } from './store/actionts/auth'
import Header from './components/HeaderContainer'

function App({ user, token, getMe }) {
  useEffect(() => {
    const token = window.localStorage.getItem('userToken')
    if (token) {
      getMe(token)
    }
  }, [])

  useEffect(() => {
    if (token) {
      window.localStorage.setItem('userToken', token)
    }
  }, [token])

  return (
    <BrowserRouter>
      <Header isLoggingUser={!!user} />
      <Routes>
        <Route path="/registration" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

const MemoApp = React.memo(App)

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    token: state.auth.token
  }
}

export default connect(mapStateToProps, { getMe })(MemoApp)
