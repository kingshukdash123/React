import { useDispatch } from "react-redux";  
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";


function LogoutBtn() {

    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout()
            .then(() => {
                dispatch(logout());
            })
    }

    return (
        <button
            style={styles.logoutButton}
                onClick={logoutHandler}
                onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#DBEAFE")
                }
                onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                }
        >
            Logout
        </button>
    )
}

export default LogoutBtn;


const styles = {
  logoutButton: {
    display: "inline-block",
    padding: "8px 24px", // py-2 px-6
    borderRadius: "9999px", // rounded-full
    transition: "background-color 0.2s ease",
    cursor: "pointer",
    border: "none",
    backgroundColor: "transparent",
  },
};