import React from 'react'
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/Login.jsx';
import PassReset from './pages/PassReset.jsx';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/passreset" element={<PassReset />} />
    </Routes>
  )
}

export default App