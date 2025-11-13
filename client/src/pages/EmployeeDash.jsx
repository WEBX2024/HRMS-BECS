import React from "react";
import { Clock, ClipboardCheck, FileText, Calendar } from "lucide-react";
import DashboardLayout from "../Layouts/DashboardLayout";

const EmployeeDash = () => {
  const cards = [
    { title: "Attendance", value: "Present", color: "green", icon: Clock },
    { title: "Tasks Completed", value: "24", color: "blue", icon: ClipboardCheck },
    { title: "Leaves Left", value: "8", color: "yellow", icon: Calendar },
    { title: "Documents", value: "12", color: "red", icon: FileText },
  ];

  return (
    <DashboardLayout role="employee" cards={cards}>
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">My Dashboard</h1>
      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-500">Your activities and updates appear here.</p>
      </div>
    </DashboardLayout>
  );
};

export default EmployeeDash;
