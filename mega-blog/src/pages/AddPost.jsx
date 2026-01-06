import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div style={styles.wrapper}>
      <Container>
        <PostForm />
      </Container>
    </div>
  )
}

export default AddPost

const styles = {
  wrapper: {
    paddingTop: "32px",   // py-8
    paddingBottom: "32px",
  },
}
