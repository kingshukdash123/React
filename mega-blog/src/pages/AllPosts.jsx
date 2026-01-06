import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config"

function AllPosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  if(posts.length === 0) return (
    <div style={styles.empty}>There are no Posts in our database.</div>
  )

  return (
    <div style={styles.page}>
      <Container>
        <div style={styles.postsWrapper}>
          {posts.map((post) => (
            <div key={post.$id} style={styles.postItem}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts


const styles = {
  page: {
    width: "100%",
    paddingTop: "32px",   // py-8
    paddingBottom: "32px",
  },

  postsWrapper: {
    display: "flex",
    flexWrap: "wrap",
  },

  postItem: {
    width: "25%",         // w-1/4
    padding: "8px",       // p-2
    boxSizing: "border-box",
  },

  empty: {
    height: '30vh',
    textAlign: 'center',
    padding: "80px 20px",
    fontSize: "40px",
    fontWeight: 800,
    color: "#6b728048", // gray-500
  }
}

