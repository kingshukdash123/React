import React from 'react'
import { Login as LoginComponent } from '../components'

function Login() {
  return (
    <div style={styles.wrapper}>
      <LoginComponent />
    </div>
  )
}

export default Login

const styles = {
  wrapper: {
    paddingTop: "32px",   // py-8
    paddingBottom: "32px",
  },
}
