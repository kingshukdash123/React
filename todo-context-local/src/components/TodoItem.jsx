import { useState, useContext } from "react";
import { useTodo } from "../contexts";

function TodoItem({ todo }) {
  const itemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
    backgroundColor: todo.completed ? "#c6e9a7" : "#ccbed7",
  };

  const textStyle = {
    flex: 1,
    border: "none",
    backgroundColor: "transparent",
    fontSize: "16px",
    textDecoration: todo.completed ? "line-through" : "none",
    outline: "none",
  };

  const buttonStyle = {
    width: "32px",
    height: "32px",
    borderRadius: "6px",
    border: "1px solid #999",
    backgroundColor: "#f3f4f6",
    cursor: "pointer",
  };


  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }

  return (
    <div style={itemStyle}>
      <input type="checkbox" checked={todo.completed} onChange={toggleCompleted} />

      <input
        type="text"
        value={todoMsg}
        readOnly={!isTodoEditable}
        onChange={(e) => setTodoMsg(e.target.value)}
        style={textStyle}
      />

      <button 
        style={buttonStyle}
        onClick={() => {
          if (todo.completed) return

          if (isTodoEditable) {
              editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      <button 
        style={buttonStyle}
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
