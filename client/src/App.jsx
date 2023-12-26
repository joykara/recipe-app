import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)


  return (
    <>
      <div className="card">
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>
          Increment
        </button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      </div>
    </>
  )
}

export default App
