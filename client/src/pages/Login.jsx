import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { User, Lock } from "lucide-react"; //

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      /* your login logic here */
    });
    const data = await res.json();

    if (data.role === "admin") navigate("/admin-dashboard");
    else if (data.role === "hr") navigate("/hr-dashboard");
    else if (data.role === "employee") navigate("/employee-dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-red-900 via-white to-red-900">
      <div
        className="flex flex-col justify-center w-full max-w-md rounded-xl px-8 py-10 
                      border border-black/20 bg-white/10 backdrop-blur-md shadow-2xl 
                      text-white text-sm animate-fadeIn"
      >
        <div className="flex justify-center">
          <img
            src="/logo.png"
            alt="BECS Logo"
            className="w-16 h-16 object-contain"
          />
        </div>
        <h4 className="text-3xl font-semibold text-center text-black">BECS HRMS</h4>
        <h2 className="text-black text-xl text-center mb-8">Login to your account</h2>

        <form onSubmit={handleLogin}>
          <label
            htmlFor="myDropdown"
            className="block mb-1 font-medium text-black"
          >
            User Role
          </label>

          <select
            id="myDropdown"
            name="mySelection"
            defaultValue=""
            className="w-full p-2 mb-4 bg-transparent border border-gray-900 rounded-md 
             text-black focus:outline-none focus:ring-1 transition 
             focus:ring-black focus:border-black appearance-none"
          >
            <option value="" disabled className="text-gray-500">
              Select Role
            </option>
            <option value="option1">Admin</option>
            <option value="option2">HR</option>
            <option value="option3">Employee</option>
          </select>

          <label
            htmlFor="alphanumericField"
            className="block mb-1 font-medium text-black"
          >
            User ID
          </label>
          <div className="relative mb-4">
            <User
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type="text"
              id="alphanumericField"
              name="ID"
              pattern="[A-Za-z0-9]+"
              title="Only alphanumeric characters are allowed"
              placeholder="e.g: a1b2c3d4"
              className="w-full p-2 pl-9 bg-transparent border border-gray-900 rounded-md 
                       focus:outline-none focus:ring-1 transition focus:ring-black focus:border-black placeholder-slate-500 text-black"
            />
          </div>

          <label
            htmlFor="password"
            className="block mb-1 font-medium text-black"
          >
            Password
          </label>
          <div className="relative mb-3">
            <Lock
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 pl-9 bg-transparent border border-black rounded-md 
                       focus:outline-none focus:ring-1 transition focus:ring-black focus:border-black placeholder-slate-500 text-black"
            />
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2 text-right mb-6 mt-6">
            <a href="./PassReset" className="font-medium text-black hover:text-blue-800 underline">
              Forgot password?
            </a>
          </div>

          <div className="flex items-center justify-center">
            <Button type="submit" text="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
