import React from "react";
import { Users, Briefcase, Clock, Building2 } from "lucide-react";
import DashboardLayout from "../Layouts/DashboardLayout";

const AdminDash = () => {
  const cards = [
    { title: "Total Employees", value: "245", color: "green", icon: Users },
    { title: "Active Projects", value: "12", color: "blue", icon: Briefcase },
    { title: "Pending Approvals", value: "5", color: "yellow", icon: Clock },
    { title: "Departments", value: "8", color: "red", icon: Building2 },
  ];

  return (
    <DashboardLayout role="admin" cards={cards}>
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Admin Overview</h1>
      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-500">Admin-specific analytics will appear here.</p>
      </div>
    </DashboardLayout>
  );
};

export default AdminDash;
