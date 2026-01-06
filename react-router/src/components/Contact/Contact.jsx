import React from "react";

export default function Contact() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>Contact</h1>

        <p style={styles.text}>
          Have a question or want to work together? Feel free to reach out.
        </p>

        <p style={styles.text}>
          Email: <strong>contact@yourcompany.com</strong>
        </p>

        <p style={styles.text}>
          We usually respond within 24 hours.
        </p>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "70vh",
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
  },
  container: {
    maxWidth: "900px",
    textAlign: "center",
  },
  title: {
    fontSize: "32px",
    fontWeight: "600",
    color: "#222",
    marginBottom: "20px",
  },
  text: {
    fontSize: "15px",
    color: "#666",
    lineHeight: "1.7",
    marginBottom: "12px",
  },
};
