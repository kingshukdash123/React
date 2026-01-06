import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";


export default function Todos() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <>
            <div style={styles.heading}>Todos</div>

            <ul style={styles.list}>
                {todos.map((todo) => (
                    <li style={styles.listItem} key={todo.id}>
                        <div style={styles.todoText}>{todo.text}</div>

                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            style={styles.deleteButton}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                style={styles.icon}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );

}

const styles = {
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "16px",
    color: "#ffffff",
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },

  listItem: {
    marginTop: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#27272a", // zinc-800 equivalent
    padding: "10px 16px",
    borderRadius: "8px",
  },

  todoText: {
    color: "#ffffff",
    fontSize: "16px",
  },

  deleteButton: {
    backgroundColor: "#ef4444", // red-500
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    width: "24px",
    height: "24px",
    color: "#ffffff",
  },
};
