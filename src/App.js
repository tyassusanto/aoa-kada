import React from 'react'
import LandingPage from './Pages/LandingPage/LandingPage'
import LoginPage from './Pages/LoginPage/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
