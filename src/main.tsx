import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/index.tsx'
import Home from './pages/Home/index.tsx'
import Background from './components/Background/index.tsx'

ReactDOM.render(
  <React.StrictMode>
    <Background />
    <Navbar/>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)