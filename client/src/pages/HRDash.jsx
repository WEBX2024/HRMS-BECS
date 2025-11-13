import React from "react";
import { Users, CalendarDays, ClipboardList, Briefcase } from "lucide-react";
import DashboardLayout from "../Layouts/DashboardLayout";

const HRDash = () => {
  const cards = [
    { title: "Employees", value: "120", color: "green", icon: Users },
    { title: "Leave Requests", value: "18", color: "yellow", icon: CalendarDays },
    { title: "Recruitments", value: "6", color: "blue", icon: Briefcase },
    { title: "Performance Reviews", value: "12", color: "red", icon: ClipboardList },
  ];

  return (
    <DashboardLayout role="hr" cards={cards}>
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">HR Overview</h1>
      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-500">HR tools and analytics go here.</p>
      </div>
    </DashboardLayout>
  );
};

export default HRDash;
