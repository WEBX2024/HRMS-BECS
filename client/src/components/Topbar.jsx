import React from "react";
import { Bell, Search } from "lucide-react";
import BBsir from "../assets/BBsir.png";

const Topbar = ({ role }) => {
  const displayName =
    role === "admin" ? "David (Admin)" :
    role === "hr" ? "Olivia (HR)" :
    "Alex (Employee)";

  return (
    <header className="flex justify-between items-center bg-white shadow-sm px-6 py-4 border-b border-gray-100">
      <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-md w-64">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder={`Search ${role} data...`}
          className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500"
        />
      </div>

      <div className="flex items-center gap-6">
        <Bell className="text-gray-600 cursor-pointer" size={20} />
        <div className="flex items-center gap-2">
          <img
            src="/BBsir.png"
            alt="Profile"
            className="w-9 h-9 rounded-full border"
          />
          <span className="text-gray-800 font-medium text-sm">{displayName}</span>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
