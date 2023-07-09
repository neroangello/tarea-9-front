import { useState } from 'react'
//import './App.css'
import './App.scss'

import { Nav } from "./components/Nav";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
      <Content></Content>
      <Footer></Footer>
    </>
  )
}

export default App
