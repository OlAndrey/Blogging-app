import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { setCheckAuth, getMe, logout } from './store/actionts/auth'
import Header from './components/HeaderContainer'
import AppRouter from './components/AppRouter'
import Loading from './components/Loading'

function App({ isCheckAuth, user, token, getMe, logout, setCheckAuth }) {
  useEffect(() => {
    const token = window.localStorage.getItem('userToken')
    if (token) getMe(token)
    else setCheckAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {isCheckAuth ? (
        <>
          <Header isLoggingUser={!!user} events={{ logout: handlerLogout }} />
          <AppRouter user={!!user} />
        </>
      ) : (
        <Loading />
      )}
    </BrowserRouter>
  )
}

const MemoApp = React.memo(App)

const mapStateToProps = (state) => {
  return {
    isCheckAuth: state.auth.isCheckAuth,
    user: state.auth.user,
    token: state.auth.token
  }
}

export default connect(mapStateToProps, { getMe, logout, setCheckAuth })(
  MemoApp
)
