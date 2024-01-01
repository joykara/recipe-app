import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, CreateRecipe, Auth, Recipes } from './pages'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/recipe" exact element={<Recipes />} />
        </Routes>
      </Router>
      <div className="card">
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      </div>
    </>
  )
}

export default App
