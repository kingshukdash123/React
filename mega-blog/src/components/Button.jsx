function Button({
    children,
    type = "button",
    bgColor = "blue",
    textColor = "white",
    style = {},
    ...props
}) {
    return (
        <button
            type={type}
            style={{
                ...baseStyles.button,
                backgroundColor: bgColorMap[bgColor] || bgColor,
                color: textColorMap[textColor] || textColor,
                ...style,
            }}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;


const baseStyles = {
  button: {
    padding: "8px 16px", // px-4 py-2
    borderRadius: "8px", // rounded-lg
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.2s ease, color 0.2s ease",
  },
};

const bgColorMap = {
  blue: "#2563EB",   // blue-600
  red: "#DC2626",    // red-600
  green: "#16A34A",  // green-600
  gray: "#6B7280",   // gray-500
};

const textColorMap = {
  white: "#FFFFFF",
  black: "#000000",
  gray: "#374151",
};
