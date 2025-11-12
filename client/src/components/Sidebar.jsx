import React from "react";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Settings,
  MessageSquare,
  FileText,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ role = "admin" }) => {
  // Sidebar items based on role
  const menus = {
    admin: [
      { name: "Dashboard", icon: <LayoutDashboard size={18} />, path: "/admin/dashboard" },
      { name: "HR Management", icon: <Users size={18} />, path: "/admin/hr-management" },
      { name: "Reports", icon: <FileText size={18} />, path: "/admin/reports" },
      { name: "Settings", icon: <Settings size={18} />, path: "/admin/settings" },
      { name: "Messages", icon: <MessageSquare size={18} />, path: "/admin/messages" },
    ],
    hr: [
      { name: "Dashboard", icon: <LayoutDashboard size={18} />, path: "/hr/dashboard" },
      { name: "Employees", icon: <Users size={18} />, path: "/hr/employees" },
      { name: "Leave Requests", icon: <ClipboardList size={18} />, path: "/hr/leave-requests" },
      { name: "Reports", icon: <FileText size={18} />, path: "/hr/reports" },
      { name: "Messages", icon: <MessageSquare size={18} />, path: "/hr/messages" },
    ],
    employee: [
      { name: "Dashboard", icon: <LayoutDashboard size={18} />, path: "/employee/dashboard" },
      { name: "My Tasks", icon: <ClipboardList size={18} />, path: "/employee/tasks" },
      { name: "Reports", icon: <FileText size={18} />, path: "/employee/reports" },
      { name: "Messages", icon: <MessageSquare size={18} />, path: "/employee/messages" },
      { name: "Settings", icon: <Settings size={18} />, path: "/employee/settings" },
    ],
  };

  const activeMenu = menus[role] || [];

  return (
    <aside className="w-64 bg-white shadow-xl flex flex-col justify-between border-r border-gray-200">
      {/* Top: Logo + Nav */}
      <div>
        <div className="flex items-center gap-2 p-6 border-b border-gray-100">
          <img src="/logo.png" alt="BECS Logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold text-gray-800">BECS HUB</h1>
        </div>

        <nav className="mt-6 space-y-1">
          {activeMenu.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                  isActive
                    ? "bg-red-100 text-red-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom: Logout */}
      <div className="border-t border-gray-100">
        <button className="flex items-center gap-3 px-6 py-3 w-full text-gray-600 hover:bg-red-50 hover:text-red-600 transition">
          <LogOut size={18} /> Log Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
