import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Login from "./pages/Login.jsx";
import PassReset from "./pages/PassReset.jsx";
import AdminDash from "./pages/AdminDash";


const App = () => {
  return (
    <Routes>
      {/* Landing Page Route */}
      <Route path="/" element={<LandingPage />} />

      {/* Authentication Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/passreset" element={<PassReset />} />

      {/* Dashoboard routes */}
      <Route path="/admin/dashboard" element={<AdminDash />} />
    </Routes>
  );
};

export default App;
