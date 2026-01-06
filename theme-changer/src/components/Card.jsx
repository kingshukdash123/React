import useTheme from "../contexts/theme";

export default function Card() {
  const { themeMode } = useTheme();
  const isDark = themeMode === "dark";

  const styles = {
    card: {
      width: "100%",
      maxWidth: "360px",
      backgroundColor: isDark ? "#1f2933" : "#ffffff",
      border: isDark ? "1px solid #374151" : "1px solid #e5e7eb",
      borderRadius: "10px",
      boxShadow: isDark
        ? "0 4px 10px rgba(0,0,0,0.6)"
        : "0 4px 10px rgba(0,0,0,0.1)",
      overflow: "hidden",
      color: isDark ? "#f9fafb" : "#111827",
    },

    image: {
      width: "100%",
      padding: "20px",
      objectFit: "cover",
    },

    body: {
      padding: "20px",
    },

    title: {
      fontSize: "18px",
      fontWeight: "600",
      color: isDark ? "#f9fafb" : "#111827",
      marginBottom: "10px",
      textDecoration: "none",
    },

    rating: {
      display: "flex",
      alignItems: "center",
      marginBottom: "16px",
    },

    star: {
      color: "#f59e0b",
      marginRight: "4px",
      fontSize: "16px",
    },

    starGray: {
      color: isDark ? "#6b7280" : "#9ca3af",
      marginRight: "6px",
      fontSize: "16px",
    },

    badge: {
      marginLeft: "8px",
      backgroundColor: isDark ? "#1e3a8a" : "#dbeafe",
      color: isDark ? "#bfdbfe" : "#1e40af",
      fontSize: "12px",
      fontWeight: "600",
      padding: "2px 8px",
      borderRadius: "6px",
    },

    footer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    price: {
      fontSize: "28px",
      fontWeight: "700",
      color: isDark ? "#f9fafb" : "#111827",
    },

    button: {
      backgroundColor: "#2563eb",
      color: "#ffffff",
      padding: "10px 16px",
      borderRadius: "8px",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: "500",
    },
  };

  return (
    <div style={styles.card}>
      <img
        style={styles.image}
        src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg"
        alt="product"
      />

      <div style={styles.body}>
        <h5 style={styles.title}>
          Apple Watch Series 7 GPS, Aluminium Case
        </h5>

        <div style={styles.rating}>
          {[1, 2, 3, 4].map((_, i) => (
            <span key={i} style={styles.star}>★</span>
          ))}
          <span style={styles.starGray}>★</span>
          <span style={styles.badge}>4.3</span>
        </div>

        <div style={styles.footer}>
          <span style={styles.price}>$599</span>
          <a href="/" style={styles.button}>Add to cart</a>
        </div>
      </div>
    </div>
  );
}
