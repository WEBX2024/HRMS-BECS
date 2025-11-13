import React from "react";

const Card = ({ title, value, icon: Icon, color = "red" }) => {
  const colorClasses = {
    red: "bg-red-100 text-red-700 border-red-300",
    blue: "bg-blue-100 text-blue-700 border-blue-300",
    green: "bg-green-100 text-green-700 border-green-300",
    yellow: "bg-yellow-100 text-yellow-700 border-yellow-300",
  };

  return (
    <div
      className={`flex items-center justify-between p-4 rounded-xl shadow-sm border ${colorClasses[color]}`}
    >
      <div>
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      {Icon && <Icon size={32} className="opacity-70" />}
    </div>
  );
};

export default Card;
