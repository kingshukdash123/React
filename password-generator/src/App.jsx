import { useState, useCallback , useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGenarator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numberAllowed) str += '0123456789'
    if(charAllowed) str += '!@#$%^&*'

    for(let i = 1; i <= length; i++) {
      let idx = Math.floor(Math.random() * str.length)
      pass += str[idx]
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    passwordGenarator()
  }, [length, numberAllowed, charAllowed])

  return (
    <>
      <h1 className='heading'>Password Generator</h1>
      <div className="top">
        <input 
          type="text" 
          id='password' 
          placeholder='Password'
          value={password}
          readOnly
        />
        <button className='copy-btn'>COPY</button>
      </div>
      <div className="settings">
        <input
          type="range" 
          min={6} 
          max={20}
          value={length}
          onChange={(e) => {
            setLength(e.target.value)
          }}
        />
        <label>Length: {length}</label>

        <input
          type="checkbox" 
          defaultChecked={numberAllowed}
          id='num-checkbox'
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }}
        />
        <label>Number</label>

        <input
          type="checkbox" 
          defaultChecked={charAllowed}
          id='char-checkbox'
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }}
        />
        <label>Character</label>
      </div>
    </>
  )
}

export default App
