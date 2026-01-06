import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import config from './config/config'
import authService from './appwrite/auth'
import './App.css'
import {login, logout} from './store/authSlice'
import {Header, Footer} from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if(userData) {
          dispatch(login({userData}))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])

  return !loading ? (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null
}

export default App
