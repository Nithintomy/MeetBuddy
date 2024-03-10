import React from 'react'
import { useState } from 'react'
import { Box,IconButton,InputBase,Typography,Select,MenuItem,FormControl,useTheme,useMediaQuery } from '@mui/material'
import {Search,Message,DarkMode,LightMode,Notifications,Help,Menu,Close} from '@mui/icons-material'
import {useDispatch,useSelector} from 'react-redux'
import {setMode,setLogout} from '../../state/authSlice'
import {useNavigate} from 'react-router-dom'
import FlexBetween from '../../components/FlexBetween'

function Navbar() {

  const [isMobileMenuToggle,setIsMobileMenuToggle] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state)=>state.user)
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)"); //inbuild method in mui to set the min-width
  const theme = useTheme()
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light
  const alt = theme.palette.background.alt

  const fullName = `${user.firstName} ${user.lastName}`

  return (
    <div>
      <h2>Hello Navbar</h2>
    </div>
  )
}

export default Navbar
