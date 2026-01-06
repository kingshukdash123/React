import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'

function Home() {
  const [posts, setPosts] = useState([])
  const loggedIn = useSelector((state) => state.auth.status)

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  
  if(!loggedIn) return (
    <div style={styles.emptyPage}>
      <Container>
        <div style={styles.emptyCard}>
          <h1 style={styles.emptyHeading}>
            Welcome to MegaBlog 👋
          </h1>
          <p style={styles.emptySubText}>
            Please login to read posts and explore amazing content.
          </p>
        </div>
      </Container>
    </div>
  )


  else {
    return (
      <div style={styles.emptyPage}>
        <Container>
          <div style={styles.emptyCard}>
            <h1 style={styles.emptyHeading}>
              Welcome to MegaBlog 👋
            </h1>

            <p style={styles.emptySubText}>
              All types of blogs available here, You can add your blog here.
            </p>
            <Link to='/all-posts' style={styles.btn}>
              View Blogs
            </Link>
          </div>
        </Container>
      </div>
    )
  }

  // return (
  //   <div style={styles.page}>
  //     <Container>
  //       <div style={styles.flexWrap}>
  //         {posts.map((post) => (
  //           <div key={post.$id} style={styles.postItem}>
  //             <PostCard {...post} />
  //           </div>
  //         ))}
  //       </div>
  //     </Container>
  //   </div>
  // )
}

export default Home




const styles = {
  page: {
    width: "100%",
    padding: "32px 0",
  },

  emptyPage: {
    width: "100%",
    minHeight: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9FAFB", // gray-50
  },

  emptyCard: {
    marginLeft: '22rem', 
    maxWidth: "480px",
    padding: "32px",
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.42)",
    textAlign: "center",
  },

  emptyHeading: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#111827", // gray-900
    marginBottom: "12px",
  },

  emptySubText: {
    fontSize: "16px",
    color: "#6B7280", // gray-500
    lineHeight: "1.6",
  },

  flexWrap: {
    display: "flex",
    flexWrap: "wrap",
  },

  postItem: {
    width: "25%",
    padding: "8px",
    boxSizing: "border-box",
  },

  btn: {
  display: "inline-block",
  marginTop: "20px",
  padding: "12px 24px",
  fontSize: "16px",
  fontWeight: "600",
  color: "#FFFFFF",
  backgroundColor: "#2563EB", // blue-600
  border: "none",
  borderRadius: "8px",
  textDecoration: "none",
  cursor: "pointer",
  transition: "all 0.3s ease",
}

}

