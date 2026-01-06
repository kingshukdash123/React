import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </p>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    minHeight: "15vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    borderTop: "1px solid #ddd",
    backgroundColor: "#f9f9f9",
  },
  text: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    textDecoration: "none",
    color: "#000000ff",
    fontSize: "14px",
    fontWeight: "500",
  },
};
