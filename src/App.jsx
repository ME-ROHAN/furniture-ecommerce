import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Newsletter from './Components/Newsletter'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  )
}

export default App
