import React, { useId } from "react";


const Input = React.forwardRef(function Input({ 
    label, 
    type = "text", 
    style = {}, 
    ...props
}, ref) {

    const id = useId();

    return (
        <div style={styles.wrapper}>
            {label && (
                <label htmlFor={id} style={styles.label}>
                    {label}
                </label>
            )}

            <input
                id={id}
                ref={ref}
                type={type}
                style={{ ...styles.input, ...style }}
                onFocus={(e) => {
                    e.currentTarget.style.backgroundColor = "#F9FAFB"; // gray-50
                    e.currentTarget.style.borderColor = "#D1D5DB"; // subtle focus
                }}
                onBlur={(e) => {
                    e.currentTarget.style.backgroundColor = "#FFFFFF";
                    e.currentTarget.style.borderColor = "#E5E7EB";
                }}
                {...props}
            />
        </div>
    );
});

export default Input;




const styles = {
  wrapper: {
    width: "100%",
  },

  label: {
    display: "inline-block",
    marginBottom: "4px",
    paddingLeft: "4px",
    fontSize: "14px",
    color: "#111827",
  },

  input: {
    width: "100%",
    padding: "8px 12px", // px-3 py-2
    borderRadius: "8px", // rounded-lg
    backgroundColor: "#FFFFFF",
    color: "#000000",
    border: "1px solid #E5E7EB", // gray-200
    outline: "none",
    fontSize: "16px",
    transition: "background-color 0.2s ease, border-color 0.2s ease",
  },
};