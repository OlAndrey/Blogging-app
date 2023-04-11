import React, { useState, useEffect } from 'react'
import Header from './Header'
import { HOME_ROUTE, LOGIN_ROUTE, MY_POSTS_ROUTE, POST_CREATE_ROUTE } from '../utils/const'

const headersData = [
  {
    isNotSecure: true,
    label: 'Home',
    href: HOME_ROUTE
  },
  {
    isNotSecure: false,
    label: 'Home',
    href: HOME_ROUTE
  },
  {
    isNotSecure: false,
    label: 'My posts',
    href: MY_POSTS_ROUTE
  },
  {
    isNotSecure: false,
    label: 'Add post',
    href: POST_CREATE_ROUTE
  },
  {
    isNotSecure: false,
    label: 'Log Out',
    href: '#',
    event: 'logout'
  },
  {
    isNotSecure: true,
    label: 'Log In',
    href: LOGIN_ROUTE
  }
]

const HeaderContainer = ({ isLoggingUser, events }) => {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  })

  const { mobileView, drawerOpen } = state

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }))
    }

    setResponsiveness()

    window.addEventListener('resize', () => setResponsiveness())
    return () => {
      window.removeEventListener('resize', () => setResponsiveness())
    }
  }, [])

  return (
    <Header
      isLoggingUser={isLoggingUser}
      mobileView={mobileView}
      drawerOpen={drawerOpen}
      data={headersData}
      events={events}
      changeState={setState}
    />
  )
}

export default HeaderContainer
