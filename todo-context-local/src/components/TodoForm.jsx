import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const formStyle = {
    display: "flex",
    marginBottom: "20px",
  };

  const inputStyle = {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px 0 0 6px",
    border: "1px solid #ccc",
    outline: "none",
  };

  const buttonStyle = {
    padding: "10px 16px",
    fontSize: "16px",
    border: "none",
    backgroundColor: "#22c55e",
    color: "#fff",
    borderRadius: "0 6px 6px 0",
    cursor: "pointer",
  };

  const [todo, setTodo] = useState('')
  const {addTodo} = useTodo()

  const add = (e) => {
    e.preventDefault()

    if(!todo) return 
    addTodo({todo:todo, completed: false})
    setTodo('')
  }


  return (
    <form onSubmit={add} style={formStyle}>
      <input
        type="text"
        placeholder="Write Todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>
        Add
      </button>
    </form>
  );
}

export default TodoForm;
