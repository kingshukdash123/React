import React, { forwardRef, useId } from 'react'

function Select({
    options=[], 
    label,
    className={}, 
    ...props 
}, ref) {

    const id = useId()

    return (
        <div style={styles.wrapper}>
            {label && (
                <label htmlFor={id} style={styles.label}>
                    {label}
                </label>
            )}

            <select
                id={id}
                ref={ref}
                style={{ ...styles.select, ...className }}
                onFocus={(e) => {
                    e.currentTarget.style.backgroundColor = "#F9FAFB"; // gray-50
                    e.currentTarget.style.borderColor = "#D1D5DB";
                }}
                onBlur={(e) => {
                    e.currentTarget.style.backgroundColor = "#FFFFFF";
                    e.currentTarget.style.borderColor = "#E5E7EB";
                }}
                {...props}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )

}

export default forwardRef(Select);



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

  select: {
    width: "100%",
    padding: "8px 12px", // px-3 py-2
    borderRadius: "8px", // rounded-lg
    backgroundColor: "#FFFFFF",
    color: "#000000",
    border: "1px solid #E5E7EB", // gray-200
    outline: "none",
    fontSize: "16px",
    transition: "background-color 0.2s ease, border-color 0.2s ease",
    cursor: "pointer",
  },
};