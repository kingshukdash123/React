import useTheme from "../contexts/theme";

export default function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const isDark = themeMode === "dark";

  const onChangeBtn = (e) => {
    if (e.target.checked) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <label style={styles.switch}>
      <input
        type="checkbox"
        checked={isDark}
        onChange={onChangeBtn}
        style={styles.input}
      />

      <span
        style={{
          ...styles.slider,
          backgroundColor: isDark ? "#2563eb" : "#979797ff",
        }}
      >
        <span
          style={{
            ...styles.knob,
            transform: isDark ? "translateX(20px)" : "translateX(0)",
          }}
        />
      </span>

      <span style={styles.text}>
        {isDark ? "Dark Mode" : "Light Mode"}
      </span>
    </label>
  );
}

const styles = {
  switch: {
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    gap: "12px",
  },

  input: {
    display: "none",
  },

  slider: {
    width: "44px",
    height: "24px",
    borderRadius: "999px",
    position: "relative",
    transition: "0.3s",
  },

  knob: {
    position: "absolute",
    top: "2px",
    left: "2px",
    width: "20px",
    height: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "50%",
    transition: "0.3s",
  },

  text: {
    fontSize: "16px",
    fontWeight: "500",
  },
};
