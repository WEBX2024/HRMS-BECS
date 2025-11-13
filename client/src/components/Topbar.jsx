import React from "react";
import { Bell, Search } from "lucide-react";

const Topbar = ({ username = "David More" }) => {
  return (
    <header className="flex justify-between items-center bg-white border-b shadow-sm px-6 py-4">
      <div className="flex items-center gap-2">
        <Search className="text-gray-500" size={18} />
        <input
          type="text"
          placeholder="Search anything..."
          className="outline-none bg-transparent text-gray-700 placeholder-gray-400"
        />
      </div>

      <div className="flex items-center gap-6">
        <Bell className="text-gray-500" size={20} />
        <div className="flex items-center gap-2">
          <img src="/profile.png" alt="Profile" className="w-8 h-8 rounded-full" />
          <span className="text-gray-800 font-medium">{username}</span>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
