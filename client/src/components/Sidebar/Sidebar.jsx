import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";
import HamburgerButton from "./HamburgarButton";

const Sidebar = ({ role }) => {
  const [collapsed, setCollapsed] = useState(false);

  const links = {
    admin: [
      { name: "Dashboard", icon: LayoutDashboard },
      { name: "Employees", icon: Users },
      { name: "Projects", icon: Briefcase },
      { name: "Settings", icon: Settings },
    ],
    hr: [
      { name: "Dashboard", icon: LayoutDashboard },
      { name: "Attendance", icon: Users },
      { name: "Recruitment", icon: Briefcase },
      { name: "Settings", icon: Settings },
    ],
    employee: [
      { name: "Dashboard", icon: LayoutDashboard },
      { name: "My Tasks", icon: Briefcase },
      { name: "Profile", icon: Users },
      { name: "Settings", icon: Settings },
    ],
  };

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-64"
      } bg-white border-r border-gray-200 shadow-sm flex flex-col justify-between transition-all duration-300`}
    >
      <div>
        <div className="flex items-center justify-between p-4 border-b">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className="w-8 h-8" />
              <h1 className="font-bold text-red-700">BECS HUB</h1>
            </div>
          )}
          <HamburgerButton collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>

        <nav className="mt-4 space-y-1">
          {links[role].map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-700 transition rounded-md"
            >
              <item.icon size={18} />
              {!collapsed && <span>{item.name}</span>}
            </a>
          ))}
        </nav>
      </div>

      <button className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-red-100 hover:text-red-700">
        <LogOut size={18} />
        {!collapsed && <span>Logout</span>}
      </button>
    </aside>
  );
};

export default Sidebar;
