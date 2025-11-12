import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const DashboardLayout = ({ role, children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar — changes based on role */}
      <Sidebar role={role} />

      {/* Main area */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <Topbar role={role} />

        {/* Dynamic Dashboard Content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
