import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { addTodo } from "../features/todo/todoSlice";

export default function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form onSubmit={addTodoHandler} style={styles.form}>
            <input
                type="text"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={styles.input}
            />

            <button type="submit" style={styles.button}>
                Add Todo
            </button>
        </form>
    );

}

const styles = {
  form: {
    display: "flex",
    gap: "12px",          // space-x-3
    marginTop: "48px",    // mt-12
  },

  input: {
    backgroundColor: "#1f2937", // gray-800
    border: "1px solid #374151", // gray-700
    borderRadius: "6px",
    padding: "6px 12px",
    fontSize: "16px",
    color: "#f9fafb", // gray-100
    outline: "none",
    transition: "border-color 0.2s ease-in-out",
  },

  button: {
    backgroundColor: "#6366f1", // indigo-500
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    padding: "8px 24px",
    fontSize: "18px",
    cursor: "pointer",
  },
};
