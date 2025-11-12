import React from "react";
import DashboardLayout from "../Layouts/DashboardLayout";

const HRDash = () => {
  return (
    <DashboardLayout role="hr">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        HR Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-white rounded-xl shadow text-center">
          <p className="text-gray-500 text-sm">Leave Requests</p>
          <h2 className="text-xl font-bold text-red-600">7 Pending</h2>
        </div>
        <div className="p-4 bg-white rounded-xl shadow text-center">
          <p className="text-gray-500 text-sm">New Joinees</p>
          <h2 className="text-xl font-bold text-green-600">3</h2>
        </div>
        <div className="p-4 bg-white rounded-xl shadow text-center">
          <p className="text-gray-500 text-sm">Interviews Scheduled</p>
          <h2 className="text-xl font-bold text-blue-600">2</h2>
        </div>
      </div>

      {/* Placeholder */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-3">Employee Overview</h2>
        <p className="text-gray-500 text-sm">
          (Employee details and HR reports will appear here)
        </p>
      </div>
    </DashboardLayout>
  );
};

export default HRDash;
