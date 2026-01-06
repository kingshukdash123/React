import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";

const styles = {
  card: {
    width: "100%",
    backgroundColor: "#F3F4F6", // gray-100
    borderRadius: "12px", // rounded-xl
    padding: "16px", // p-4
    textDecoration: "none",
    color: "inherit",
    display: "block",
  },

  imageWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "16px",
  },

  image: {
    width: "100%",
    borderRadius: "12px", // rounded-xl
    objectFit: "cover",
  },

  title: {
    fontSize: "20px", // text-xl
    fontWeight: 700, // font-bold
    margin: 0,
  },
};

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} style={{ textDecoration: "none" }}>
      <div style={styles.card}>
        <div style={styles.imageWrapper}>
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            style={styles.image}
          />
        </div>

        <h2 style={styles.title}>{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
