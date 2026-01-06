import { useState, useEffect } from 'react'
import './App.css'
import {ThemeProvider} from './contexts/theme.js'
import Card from './components/Card.jsx'
import ThemeBtn from './components/ThemeBtn.jsx'


function App() {

  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      
      <div className="page-wrapper">
        <div className="page-inner">
              
          <div className="top-section">
            <ThemeBtn />
          </div>

          <div className="content-section">
            <Card />
          </div>

        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
