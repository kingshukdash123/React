// User.js
import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { userid } = useParams();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>User: {userid}</h1>
      <p style={styles.text}>
        This is the user page showing dynamic user ID from the URL.
      </p>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    // backgroundColor: "#f0f0f0ff", // gray-600
    color: "#fff",
    borderRadius: "6px",
  },
  title: {
    fontSize: "36px",
    marginBottom: "12px",
    color: 'black'
  },
  text: {
    fontSize: "18px",
    color: "#666", // slightly lighter text
  },
};

export default User;
