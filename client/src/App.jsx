import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { getMe, logout } from './store/actionts/auth'
import Header from './components/HeaderContainer'
import AppRouter from './components/AppRouter'

function App({ user, token, getMe, logout }) {
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

  const handlerLogout = () => {
    window.localStorage.removeItem('userToken')
    logout()
  }

  return (
    <BrowserRouter>
      <Header isLoggingUser={!!user} events={{logout: handlerLogout}} />
      <AppRouter user={!!user} />
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

export default connect(mapStateToProps, { getMe, logout })(MemoApp)
