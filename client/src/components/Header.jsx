// import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Link,
  MenuItem
} from '@mui/material'
//   import {MenuIcon} from "@mui/icons";
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Menu as MenuIcon } from '@mui/icons-material'
import useHeaderStyles from '../styles/headerStyles'

const Header = ({
  isLoggingUser,
  mobileView,
  drawerOpen,
  data,
  changeState
}) => {
  const { header, logo, toolbar, drawerContainer } = useHeaderStyles()

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div className={toolbar}>{getDrawerChoices()}</div>
      </Toolbar>
    )
  }

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      changeState((prevState) => ({ ...prevState, drawerOpen: true }))
    const handleDrawerClose = () =>
      changeState((prevState) => ({ ...prevState, drawerOpen: false }))

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: 'start',
            color: 'inherit',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
            onClick: handleDrawerOpen
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: 'left',
            open: drawerOpen,
            onClose: handleDrawerClose
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
      </Toolbar>
    )
  }

  const getDrawerChoices = () => {
    return data
      .filter((el) => isLoggingUser? !el.isNotSecure : el.isNotSecure)
      .map(({ label, href }) => {
        return (
          <Link
            {...{
              component: RouterLink,
              to: href,
              color: 'inherit',
              style: { textDecoration: 'none' },
              key: label
            }}
          >
            <MenuItem>{label}</MenuItem>
          </Link>
        )
      })
  }

  const femmecubatorLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      Femmecubator
    </Typography>
  )

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  )
}

export default Header
