import React from "react";
import { LayoutDashboard, Users, Settings, MessageSquare, ClipboardList, LogOut } from "lucide-react";

const Sidebar = ({ role }) => {
  const menuItems = {
    admin: [
      { label: "Dashboard", icon: LayoutDashboard },
      { label: "Manage Users", icon: Users },
      { label: "Reports", icon: ClipboardList },
      { label: "Settings", icon: Settings },
    ],
    hr: [
      { label: "Dashboard", icon: LayoutDashboard },
      { label: "Employees", icon: Users },
      { label: "Leave Requests", icon: ClipboardList },
      { label: "Messages", icon: MessageSquare },
    ],
    employee: [
      { label: "Dashboard", icon: LayoutDashboard },
      { label: "My Tasks", icon: ClipboardList },
      { label: "Messages", icon: MessageSquare },
      { label: "Profile", icon: Settings },
    ],
  };

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col justify-between">
      <div>
        <div className="p-6 flex items-center gap-2 border-b border-gray-100">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold text-gray-800">BECS HRMS</h1>
        </div>

        <nav className="mt-6 space-y-1">
          {menuItems[role].map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href="#"
                className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <Icon size={18} /> {item.label}
              </a>
            );
          })}
        </nav>
      </div>

      <button className="flex items-center gap-3 px-6 py-3 text-gray-600 hover:bg-red-50 hover:text-red-700">
        <LogOut size={18} /> Log out
      </button>
    </aside>
  );
};

export default Sidebar;
