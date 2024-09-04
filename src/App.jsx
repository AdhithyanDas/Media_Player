import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Register from './pages/Register';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/history' element={<History />} />
        <Route path='/reg' element={<Register />} />
        <Route path='/log' element={<Login />} />
      </Routes>

      <Footer />

      <ToastContainer />
    </>
  )
}

export default App
