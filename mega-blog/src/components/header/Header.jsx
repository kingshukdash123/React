import { Container, LogoutBtn, Logo} from '../index'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Header() {

    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        }, 
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]


    return (
        <header style={styles.header}>
            <Container>
                <nav style={styles.nav}>
                    {/* Logo */}
                    <div style={styles.logoWrapper}>
                        <Link to="/">
                            <Logo width="70px" />
                        </Link>
                    </div>

                    {/* Navigation */}
                    <ul style={styles.navList}>
                        {navItems.map(
                            (item) =>
                                item.active && (
                                <li key={item.name} style={styles.navItem}>
                                    <button
                                        style={styles.navButton}
                                        onClick={() => navigate(item.slug)}
                                        onMouseEnter={(e) =>
                                            (e.currentTarget.style.backgroundColor = "#DBEAFE") // blue-100
                                        }
                                        onMouseLeave={(e) =>
                                            (e.currentTarget.style.backgroundColor = "transparent")
                                        }
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            )
                        )}

                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
            </header>
    )
}

export default Header;



const styles = {
  header: {
    padding: "12px 0",
    backgroundColor: "#F9FAFB", // gray-50 (light & clean)
    borderBottom: "1px solid #bbbbbbff", // gray-200
  },

  nav: {
    display: "flex",
    alignItems: "center",
  },

  logoWrapper: {
    marginRight: "65vw",
  },

  navList: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    listStyle: "none",
    padding: 0,
    margin: 0,
  },

  navItem: {
    marginRight: "10px",
  },

  navButton: {
    padding: "8px 18px",
    borderRadius: "9999px",
    border: "none",
    backgroundColor: "transparent",
    color: "#1F2937", // gray-800 (important fix)
    fontSize: "15px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
};
