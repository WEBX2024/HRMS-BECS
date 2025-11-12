import React from "react";
import DashboardLayout from "../Layouts/DashboardLayout";

const AdminDash = () => {
  return (
    <DashboardLayout role="admin">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Admin Dashboard
      </h1>

      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-white rounded-xl shadow text-center">
          <p className="text-gray-500 text-sm">Total Employees</p>
          <h2 className="text-xl font-bold text-green-600">245</h2>
        </div>
        <div className="p-4 bg-white rounded-xl shadow text-center">
          <p className="text-gray-500 text-sm">Active Projects</p>
          <h2 className="text-xl font-bold text-blue-600">12</h2>
        </div>
        <div className="p-4 bg-white rounded-xl shadow text-center">
          <p className="text-gray-500 text-sm">Pending Approvals</p>
          <h2 className="text-xl font-bold text-yellow-600">5</h2>
        </div>
        <div className="p-4 bg-white rounded-xl shadow text-center">
          <p className="text-gray-500 text-sm">Total Departments</p>
          <h2 className="text-xl font-bold text-purple-600">8</h2>
        </div>
      </div>

      {/* Placeholder for future charts / activity */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-3">Activity Overview</h2>
        <p className="text-gray-500 text-sm">
          (Charts and analytics will appear here)
        </p>
      </div>
    </DashboardLayout>
  );
};

export default AdminDash;
