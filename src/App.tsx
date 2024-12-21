import Register from "./Pages/Register"
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import { useEffect } from "react"
import { TestRoute } from "./Api/AuthApi"
import Dashboard from "./Pages/Dashboard"
import VendorRegistration from "./Pages/VendorRegistration"
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CategoryProducts from "./Pages/CategoryProducts"
import ViewProduct from "./Pages/ViewProduct"
import { UserDetails } from "./Pages/UserDetails"

function App() {

  useEffect(()=>{
    TestRoute()
  },[])

  return (
    <BrowserRouter>
            <TransitionGroup>

      <Routes>
        <Route path="/" element={
          <CSSTransition
          timeout={1000}
          classNames="fade"
          key="page1">
          <Login />
          </CSSTransition>
        } />
        <Route path="/register" element={
          <CSSTransition
          timeout={1000}
          classNames="fade"
          key="page1"
        >
          <Register />
          </CSSTransition>
        } />
        <Route path="/home" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="vendor-registration" element={<VendorRegistration/>}/>
        <Route path="/categories/:id" element={<CategoryProducts/>}/>
        <Route path="/product" element={<ViewProduct/>}/>
        <Route path="/user_details" element={<UserDetails/>}/>
      </Routes>
      </TransitionGroup>

    </BrowserRouter>
  )
}

export default App
