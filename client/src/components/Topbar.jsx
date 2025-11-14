import React, { useState } from 'react';
import { Search, Bell, UserCircle, ChevronDown, Menu, ShieldHalf, X, LogOut } from 'lucide-react';

/**
 * Topbar Component for the HRMS Dashboard.
 * @param {string} userRole - The role of the current user.
 * @param {boolean} isSidebarOpen - State of the sidebar (used for responsive spacing).
 * @param {function} toggleSidebar - Function to toggle the sidebar on mobile.
 */
const Topbar = ({ userRole = 'admin', isSidebarOpen, toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  // Placeholder for user details
  const userName = userRole.charAt(0).toUpperCase() + userRole.slice(1);

  // Toggle handlers
  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);
  const toggleSearch = () => setIsSearchActive(prev => !prev);
  const handleLogout = () => console.log("Logging out..."); // Placeholder for logout action

  return (
    <header
      className={`
        fixed top-0 right-0 h-16 bg-white dark:bg-gray-800 shadow-md z-30 
        flex items-center justify-between transition-all duration-300 px-4 sm:px-6
        ${isSidebarOpen ? 'lg:left-64' : 'lg:left-0'} 
        w-full lg:w-[calc(100%-${isSidebarOpen ? '16rem' : '0'})] 
        lg:ml-0
      `}
    >
      
      {/* 1. Left Side/Mobile Toggle */}
      <div className="flex items-center space-x-3 lg:hidden">
        <button 
          onClick={toggleSidebar}
          className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
          aria-label="Toggle sidebar"
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* 2. Mobile Logo (Center on small screens, hidden on large screens) */}
      <div className="flex items-center justify-center flex-grow lg:flex-grow-0">
        <div className="flex items-center space-x-2 lg:hidden">
          <ShieldHalf className="w-6 h-6 text-blue-600" />
          <span className="text-lg font-bold text-gray-800 dark:text-white">BECS HRMS</span>
        </div>
      </div>

      {/* 3. Right Side Elements (Search, Notification, User) */}
      <div className="flex items-center space-x-4 ml-auto">
        
        {/* Search Bar (Full on Desktop, Icon on Mobile/Collapsed) */}
        <div className="relative">
          {/* Desktop Search Input */}
          <div className={`hidden sm:flex items-center transition-all duration-300 ${isSearchActive ? 'w-64' : 'w-48'}`}>
            <Search className="w-5 h-5 text-gray-400 absolute left-3" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-200"
              onFocus={() => setIsSearchActive(true)}
              onBlur={() => setIsSearchActive(false)}
            />
          </div>

          {/* Mobile Search Icon */}
          <button 
            onClick={toggleSearch} 
            className="sm:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            aria-label="Toggle search"
          >
            <Search className="w-6 h-6" />
          </button>
        </div>

        {/* Notification Icon */}
        <button
          className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors relative"
          aria-label="Notifications"
        >
          <Bell className="w-6 h-6" />
          <span className="absolute top-1 right-1 block w-2 h-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-800"></span>
        </button>

        {/* User Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-1 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          >
            <UserCircle className="w-8 h-8 text-blue-600" />
            <ChevronDown className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'} hidden sm:block`} />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-xl shadow-xl border border-gray-100 dark:border-gray-600 z-50 overflow-hidden">
              <div className="p-3 border-b border-gray-100 dark:border-gray-600">
                <p className="text-sm font-semibold text-gray-800 dark:text-white truncate">{userName} Dashboard</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{userRole.toUpperCase()}</p>
              </div>
              <a 
                href="#"
                className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                onClick={(e) => { e.preventDefault(); console.log("View Profile"); setIsDropdownOpen(false); }}
              >
                <UserCircle className="w-4 h-4 mr-2" />
                View Profile
              </a>
              <button
                onClick={() => { handleLogout(); setIsDropdownOpen(false); }}
                className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-800/20 transition-colors"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;