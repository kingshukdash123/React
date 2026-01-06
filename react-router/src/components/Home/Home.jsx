import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to MyApp</h1>
      <p style={styles.text}>
        This is the home page of your React Router application.
      </p>

      <div>
        <Link to="/about" style={styles.button}>
          Go to About Page
        </Link>
      </div>
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
  },
  title: {
    fontSize: "36px",
    marginBottom: "12px",
  },
  text: {
    fontSize: "18px",
    marginBottom: "20px",
    color: "#555",
  },
  button: {
    padding: "10px 18px",
    backgroundColor: "#f97316",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "500",
  },
};
