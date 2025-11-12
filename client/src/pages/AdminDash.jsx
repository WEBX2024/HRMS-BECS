import React from "react";
import Sidebar from "../components/Sidebar";
import { Bell, Search } from "lucide-react";

const AdminDash = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar role="admin" />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <header className="flex justify-between items-center bg-white shadow px-6 py-4 border-b border-gray-100">
          {/* Search Box */}
          <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-md w-64">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search for stats..."
              className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500"
            />
          </div>

          {/* Profile + Notifications */}
          <div className="flex items-center gap-6">
            <Bell className="text-gray-600 cursor-pointer" size={20} />
            <div className="flex items-center gap-2">
              <img
                src="../assets/BBSir.png"
                alt="Profile"
                className="w-9 h-9 rounded-full border"
              />
              <span className="text-gray-800 font-medium text-sm">
                Biswadeep Banerjee
              </span>
            </div>
          </div>
        </header>

        {/* Main Dashboard Body */}
        <main className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Admin Dashboard
          </h1>

          {/* Placeholder sections */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="p-4 bg-white rounded-xl shadow text-center">
              <p className="text-gray-500 text-sm">Tasks Completed</p>
              <h2 className="text-xl font-bold text-green-600">100k</h2>
            </div>
            <div className="p-4 bg-white rounded-xl shadow text-center">
              <p className="text-gray-500 text-sm">In Progress</p>
              <h2 className="text-xl font-bold text-blue-600">15</h2>
            </div>
            <div className="p-4 bg-white rounded-xl shadow text-center">
              <p className="text-gray-500 text-sm">Pending</p>
              <h2 className="text-xl font-bold text-yellow-600">20</h2>
            </div>
            <div className="p-4 bg-white rounded-xl shadow text-center">
              <p className="text-gray-500 text-sm">Incomplete</p>
              <h2 className="text-xl font-bold text-red-600">5</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl shadow">
              <h2 className="text-lg font-semibold mb-4">Task Board</h2>
              <p className="text-gray-500 text-sm">[Task data will appear here]</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <h2 className="text-lg font-semibold mb-4">Performance Chart</h2>
              <p className="text-gray-500 text-sm">[Chart area placeholder]</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDash;
