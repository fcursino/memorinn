import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Home from './pages/Home'
import Details from './pages/Details'
import Register from './pages/Register'
import { DetailsProvider } from './hooks/DetailsContext'
import React from 'react'

function App() {

  return (
    <>
      <Background />
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<DetailsProvider><Home /></DetailsProvider>} />
          <Route path='/details/:title/:author' element={<DetailsProvider><Details /></DetailsProvider>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </>
    
  )
}

export default App
