import { useState } from 'react'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Project from "./components/Project"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Project></Project>
    </>
  )
}

export default App
