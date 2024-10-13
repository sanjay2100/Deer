import Register from "./Pages/Register"
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import { useEffect } from "react"
import { TestRoute } from "./Api/AuthApi"

function App() {

  useEffect(()=>{
    TestRoute()
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
