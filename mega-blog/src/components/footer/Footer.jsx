import {Link} from 'react-router-dom'
import {Logo} from '../index'

function Footer() {

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <div style={styles.flexWrap}>
                    {/* Logo + Copyright */}
                    <div style={{ ...styles.columnBase, ...styles.col5_12 }}>
                        <div style={styles.fullHeightFlex}>
                            <div style={styles.logoWrap}>
                                <Logo width="100px" />
                            </div>
                            <p style={styles.textMuted}>
                                © Copyright 2023. All Rights Reserved by DevUI.
                            </p>
                        </div>
                    </div>

                    {/* Company */}
                    <div style={{ ...styles.columnBase, ...styles.col2_12 }}>
                        <h3 style={styles.heading}>Company</h3>
                        <ul>
                            {["Features", "Pricing", "Affiliate Program", "Press Kit"].map(
                                (item) => (
                                    <li key={item} style={styles.listItem}>
                                        <Link to="/" style={styles.link}>
                                            {item}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Support */}
                    <div style={{ ...styles.columnBase, ...styles.col2_12 }}>
                        <h3 style={styles.heading}>Support</h3>
                        <ul>
                            {["Account", "Help", "Contact Us", "Customer Support"].map(
                                (item) => (
                                    <li key={item} style={styles.listItem}>
                                        <Link to="/" style={styles.link}>
                                            {item}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Legals */}
                    <div style={{ ...styles.columnBase, ...styles.col3_12 }}>
                        <h3 style={styles.heading}>Legals</h3>
                        <ul>
                            {["Terms & Conditions", "Privacy Policy", "Licensing"].map(
                                (item) => (
                                    <li key={item} style={styles.listItem}>
                                        <Link to="/" style={styles.link}>
                                            {item}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;


const styles = {
  section: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    backgroundColor: "#F9FAFB", // gray-50
    borderTop: "1px solid #bbbbbbff", // gray-200
  },

  container: {
    maxWidth: "1280px",
    margin: "0 auto",
    paddingLeft: "24px",
    paddingRight: "24px",
  },

  flexWrap: {
    display: "flex",
    // flexWrap: "wrap",
    gap: "24px",
  },

  columnBase: {
    padding: "12px",
    boxSizing: "border-box",
  },

  col5_12: {
    width: "40%",
  },

  col2_12: {
    width: "18%",
  },

  col3_12: {
    width: "24%",
  },

  fullHeightFlex: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  logoWrap: {
    display: "inline-flex",
    alignItems: "center",
    marginBottom: "8px",
  },

  textMuted: {
    fontSize: "14px",
    color: "#6B7280", // gray-500
    lineHeight: "1.6",
  },

  heading: {
    marginBottom: "20px",
    fontSize: "13px",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    color: "#374151", // gray-700
  },

  listItem: {
    marginBottom: "12px",
  },

  link: {
    fontSize: "15px",
    fontWeight: "500",
    color: "#1F2937", // gray-800
    textDecoration: "none",
    transition: "color 0.2s ease",
  },
};

