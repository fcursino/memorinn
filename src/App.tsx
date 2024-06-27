import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Home from './pages/Home'
import Details from './pages/Details'
import Register from './pages/Register'

function App() {

  return (
    <>
      <Background />
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:title/:author' element={<Details />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </>
    
  )
}

export default App
