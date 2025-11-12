import React from "react";
import DashboardLayout from "../Layouts/DashboardLayout";

const EmployeeDash = () => {
  return (
    <DashboardLayout role="employee">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Employee Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-white rounded-xl shadow text-center">
          <p className="text-gray-500 text-sm">Tasks Assigned</p>
          <h2 className="text-xl font-bold text-blue-600">12</h2>
        </div>
        <div className="p-4 bg-white rounded-xl shadow text-center">
          <p className="text-gray-500 text-sm">Tasks Completed</p>
          <h2 className="text-xl font-bold text-green-600">8</h2>
        </div>
        <div className="p-4 bg-white rounded-xl shadow text-center">
          <p className="text-gray-500 text-sm">Pending Reviews</p>
          <h2 className="text-xl font-bold text-yellow-600">4</h2>
        </div>
      </div>

      {/* Placeholder */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-3">Recent Activities</h2>
        <p className="text-gray-500 text-sm">
          (Recent project and attendance logs will appear here)
        </p>
      </div>
    </DashboardLayout>
  );
};

export default EmployeeDash;
