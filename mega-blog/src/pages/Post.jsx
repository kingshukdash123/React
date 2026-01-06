import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import appwriteService from "../appwrite/config"
import { Button, Container } from "../components"
import parse from "html-react-parser"
import { useSelector } from "react-redux"

export default function Post() {
  const [post, setPost] = useState(null)
  const { slug } = useParams()
  const navigate = useNavigate()

  const userData = useSelector((state) => state.auth.userData)
  const isAuthor = post && userData ? post.userId === userData.$id : false

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post)
        else navigate("/")
      })
    } else navigate("/")
  }, [slug, navigate])

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage)
        navigate("/")
      }
    })
  }

  return post ? (
    <div style={styles.page}>
        <div style={styles.imageWrapper}>
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            style={styles.image}
          />

          {isAuthor && (
            <div style={styles.actionButtons}>
              <Link to={`/edit-post/${post.$id}`}>
                <Button
                  bgColor="green"
                  style={styles.editButton}
                >
                  Edit
                </Button>
              </Link>

              <Button
                bgColor="red"
                onClick={deletePost}
              >
                Delete
              </Button>
            </div>
          )}
        </div>

        <div >
          <div style={styles.titleWrapper}>
            <h1 style={styles.title}>{post.title}</h1>
          </div>

          <div style={styles.content}>
            {parse(post.content)}
          </div>
        </div>
    </div>
  ) : null
}



const styles = {
  page: {
    padding: '2rem', 
    paddingTop: "40px",
    paddingBottom: "40px",
    display: 'flex', 
    gap: '2rem'
  },

  imageWrapper: {
    position: "relative",
    width: "30%",
    // height: "420px",
    borderRadius: "16px",
    overflow: "hidden",
    marginBottom: "32px",
    backgroundColor: "#F3F4F6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  actionButtons: {
    position: "absolute",
    top: "16px",
    right: "16px",
    display: "flex",
    gap: "12px",
  },

  titleWrapper: {
    marginBottom: "24px",
  },

  title: {
    fontSize: "32px",
    fontWeight: 700,
    color: "#111827",
    lineHeight: 1.2,
  },

  content: {
    fontSize: "16px",
    lineHeight: 1.8,
    color: "#374151",
  },
}
