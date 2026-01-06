import React from "react";

export default function About() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.heading}>About Us</h1>

        <p style={styles.text}>
          We are passionate about building clean, scalable, and user-friendly
          web applications using modern technologies like React.
        </p>

        <p style={styles.text}>
          Our focus is on learning by building, understanding fundamentals, and
          improving with every project we create.
        </p>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: "20px",
  },
  container: {
    maxWidth: "800px",
    textAlign: "center",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#222",
    marginBottom: "20px",
  },
  text: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "15px",
  },
};
