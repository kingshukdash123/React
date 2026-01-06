import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter, setCount] = useState(15)

  const addValue = () => {
    if(counter >= 20) {
      return;
    }
    setCount(counter + 1)
  }

  const removeValue = () => {
    if(counter <= 0) {
      return;
    }
    setCount(counter - 1)
  }

  return (
    <>
      <h1 className='heading'>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Increase {counter}</button>
      <button onClick={removeValue}>Decrease {counter}</button>
    </>
  )
}

export default App
