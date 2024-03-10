
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './scenes/loginPage/Login'
import Home from './scenes/homePage/Home'
import Profile from './scenes/profilePage/Profile'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { themeSettings } from './theme'

function App() {

  const mode = useSelector((state) => state.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])



  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/home' element={<Home />} />
            <Route path='/profile/:userId' element={<Profile />} />
          </Routes>
        </ThemeProvider>
      </Router>

    </>
  )
}

export default App
