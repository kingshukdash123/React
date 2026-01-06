import { useState } from 'react'
import './App.css'
import Btn from './components/Btn.jsx'

function App() {

  const [color, setColor] = useState()

  const colors = [
  { bg: 'red', text: 'Red' },
  { bg: 'green', text: 'Green' },
  { bg: 'blue', text: 'Blue' }
  ]

  return (
    <>
      <div className='bg' style={{backgroundColor: color}}>
        <div className="color-changer-box">
          {
            colors.map((item, index) => (
              <Btn 
                key={index}
                backgroundColor={item.bg}
                text={item.text}
                setColor={setColor}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
