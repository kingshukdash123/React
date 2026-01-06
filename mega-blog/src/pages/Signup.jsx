import React from 'react'
import { Signup as SignupComponent } from '../components'

function Signup() {
  return (
    <div style={styles.wrapper}>
      <SignupComponent />
    </div>
  )
}

export default Signup

const styles = {
  wrapper: {
    paddingTop: "32px",   // py-8
    paddingBottom: "32px",
  },
}
