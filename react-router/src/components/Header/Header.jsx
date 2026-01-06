import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header style={styles.header}>
      <Link to='/'>
        <h2 style={styles.logo}>MyApp</h2>
      </Link>

      <nav>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          style={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          style={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/github"
          style={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Github
        </NavLink>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 32px",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #ddd",
  },
  logo: {
    margin: 0,
    color: 'black', 
    fontWeight: '700'
  },
  link: {
    marginLeft: "16px",
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
  },
  activeLink: {
    marginLeft: "16px",
    textDecoration: "none",
    color: "#f97316", // orange
    fontWeight: "600",
  },
};
