import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="container my-2">
        <p>Layout</p>
      </section>
    </>
  )
}

export default App
