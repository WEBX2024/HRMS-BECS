import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import Footer from "../components/Footer.jsx";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-red-900 via-white to-red-600 text-center">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <img src="/logo.png" alt="BECS Logo" className="w-40 h-40 mb-6" />
        <h1 className="text-2xl font-semibold text-black mb-4">
          Welcome to BECS HRMS Portal
        </h1>
        <Button text="Sign In" onClick={handleSignIn} />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
