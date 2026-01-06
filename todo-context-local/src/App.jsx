import { useState, useEffect } from 'react'
import { TodoProvider } from './contexts'
import './App.css'
import {TodoForm, TodoItem} from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prevTodo) => [{id: Date.now(), ...todo}, ...prevTodo])
  }

  const updateTodo = (id, todo) => {
    setTodos((prevTodo) => 
      prevTodo.map((each) => each.id === id ? todo : each)
    )
  }

  const deleteTodo = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this todo?");
    
    if(confirmed) {
      setTodos((prevTodo) => 
        prevTodo.filter((each) => each.id !== id)
      )
    }
  }

  const toggleComplete = (id) => {
    setTodos((prevTodo) => 
      prevTodo.map((each) => 
        each.id === id ? {...each, completed: !each.completed} : each
      )
    ) 
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))

    if(todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]) 



  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#ffffffff",
      padding: "40px 0",
      fontFamily: "Arial, sans-serif",
    },

    container: {
      maxWidth: "600px",
      margin: "0 auto",
      backgroundColor: "#1f3b68ff",
      borderRadius: "10px",
      padding: "20px",
      color: "#ffffff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    },

    heading: {
      textAlign: "center",
      marginBottom: "20px",
    },
  };

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div style={styles.page}>
        <div style={styles.container}>
          <h1 style={styles.heading}>Manage Your Todos</h1>

          {/* Todo Form */}
          <TodoForm />

          {/* Todo List */}
          <div>
            {
              todos.map((todo) => (
                <div key={todo.id}>
                  <TodoItem todo={todo} />
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </TodoProvider>
  )
}

export default App
