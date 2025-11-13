import React from "react";

const HamburgerButton = ({ collapsed, setCollapsed }) => {
  return (
    <button
      onClick={() => setCollapsed(!collapsed)}
      className="relative w-8 h-8 flex flex-col justify-center items-center group"
    >
      <span
        className={`block h-[2px] w-6 bg-red-700 transition-all duration-300 ${
          collapsed ? "rotate-45 translate-y-[6px]" : ""
        }`}
      />
      <span
        className={`block h-[2px] w-4 bg-red-700 my-[5px] transition-all duration-300 ${
          collapsed ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block h-[2px] w-6 bg-red-700 transition-all duration-300 ${
          collapsed ? "-rotate-45 -translate-y-[6px]" : ""
        }`}
      />
    </button>
  );
};

export default HamburgerButton;
