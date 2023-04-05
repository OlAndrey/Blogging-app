import React, { useState, useEffect } from 'react'
import Header from './Header'

const headersData = [
  {
    isNotSecure: true,
    label: 'Home',
    href: '/home'
  },
  {
    isNotSecure: false,
    label: 'Home',
    href: '/home'
  },
  {
    isNotSecure: false,
    label: 'My posts',
    href: '/'
  },
  {
    isNotSecure: false,
    label: 'Add post',
    href: '/'
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
    href: '/login'
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
