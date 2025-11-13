import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar";
import Card from "../components/Card";

const DashboardLayout = ({ role, cards = [], children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar role={role} />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="p-6 overflow-y-auto flex-1">
          {cards.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {cards.map((card, idx) => (
                <Card key={idx} {...card} />
              ))}
            </div>
          )}
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
