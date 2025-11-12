import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Login from "./pages/Login.jsx";
import PassReset from "./pages/PassReset.jsx";
import AdminDash from "./pages/AdminDash";
import HRDash from "./pages/HRDash";
import EmployeeDash from "./pages/EmployeeDash";


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
       <Route path="/hr/dashboard" element={<HRDash />} />
        <Route path="/employee/dashboard" element={<EmployeeDash />} />
    </Routes>
  );
};

export default App;
