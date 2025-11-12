import React from "react";

const Card = ({
  title,
  value,
  color = "blue",
  icon: Icon,
  children,
  onClick,
  className = "",
}) => {
  const colorMap = {
    blue: "text-blue-600",
    red: "text-red-600",
    green: "text-green-600",
    yellow: "text-yellow-600",
    purple: "text-purple-600",
    gray: "text-gray-600",
  };

  return (
    <div
      onClick={onClick}
      className={`p-5 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer ${className}`}
    >
      <div className="flex items-center justify-between mb-3">
        {title && <h2 className="text-gray-600 font-medium">{title}</h2>}
        {Icon && <Icon size={22} className={`${colorMap[color]}`} />}
      </div>

      {value && (
        <h3 className={`text-2xl font-semibold ${colorMap[color]}`}>
          {value}
        </h3>
      )}

      {children && <div className="mt-3">{children}</div>}
    </div>
  );
};

export default Card;
