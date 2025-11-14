import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Clock,
  Wallet,
  GanttChart,
  BarChart3,
  Settings,
  User,
  Menu,
  X,
  LogOut,
  UserCircle,
  ShieldHalf,
} from 'lucide-react';

// --- ROLE-BASED NAVIGATION CONFIGURATION ---
const roleNavItems = {
  // Full access and management features
  admin: [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
    { name: 'Employees', icon: Users, path: '/admin/employees' },
    { name: 'Recruitment', icon: Briefcase, path: '/admin/recruitment' },
    { name: 'Attendance', icon: Clock, path: '/admin/attendance' },
    { name: 'Payroll & Finance', icon: Wallet, path: '/admin/payroll' },
    { name: 'Projects Management', icon: GanttChart, path: '/admin/projects' },
    { name: 'Reports & Analytics', icon: BarChart3, path: '/admin/reports' },
    { name: 'System Settings', icon: Settings, path: '/admin/settings' },
  ],
  // Management focused on personnel and process
  hr: [
    { name: 'HR Dashboard', icon: LayoutDashboard, path: '/hr/dashboard' },
    { name: 'Employee Profiles', icon: Users, path: '/hr/employees' },
    { name: 'Hiring Pipeline', icon: Briefcase, path: '/hr/recruitment' },
    { name: 'Time & Attendance', icon: Clock, path: '/hr/attendance' },
    { name: 'Salary Processing', icon: Wallet, path: '/hr/payroll' },
    { name: 'HR Policies', icon: Settings, path: '/hr/policies' },
  ],
  // Focus on personal tasks and information
  employee: [
    { name: 'My Dashboard', icon: LayoutDashboard, path: '/employee/dashboard' },
    { name: 'My Profile', icon: User, path: '/employee/profile' },
    { name: 'Time Tracking', icon: Clock, path: '/employee/timesheet' },
    { name: 'My Payslips', icon: Wallet, path: '/employee/payslips' },
    { name: 'My Projects', icon: GanttChart, path: '/employee/projects' },
    { name: 'Request Leave', icon: Briefcase, path: '/employee/leave' },
    { name: 'Settings', icon: Settings, path: '/employee/settings' },
  ],
};

// Helper function for navigation item links
const NavLink = ({ item, isActive, onClick }) => {
  const Icon = item.icon;
  return (
    <a
      // Prevent actual navigation for demonstration purposes
      href="#" 
      onClick={(e) => {
        e.preventDefault(); // Stop default anchor tag behavior
        onClick(item.path); // Pass the path back to the handler
      }}
      className={`
        flex items-center space-x-3 p-3 mx-4 rounded-xl transition-all duration-200 cursor-pointer
        ${isActive
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50 transform translate-x-1'
          : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
        }
      `}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium text-sm">{item.name}</span>
    </a>
  );
};

/**
 * Main Sidebar Component for the HRMS Admin Dashboard.
 * * @param {string} currentPath - The currently active route path.
 * @param {function} onNavigate - Function to call when a navigation link is clicked.
 * @param {string} userRole - The role of the current user ('admin', 'hr', 'employee').
 */
const Sidebar = ({ currentPath = '/dashboard', onNavigate, userRole = 'admin' }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Determine which navigation items to display based on the userRole prop
  const normalizedRole = userRole.toLowerCase();
  const currentNavItems = roleNavItems[normalizedRole] || roleNavItems['employee'];

  if (!roleNavItems[normalizedRole]) {
    console.warn(`Unknown user role: ${userRole}. Defaulting to 'employee' navigation.`);
  }


  // Function to handle logout action (placeholder)
  const handleLogout = () => {
    console.log("Logging out...");
    // Since alerts are forbidden, we use console logging for confirmation logic
    const confirmLogout = window.confirm ? window.confirm("Are you sure you want to log out?") : true;
    if (confirmLogout) {
        console.log("User confirmed logout.");
        // Implement actual logout logic here
    }
  };

  // Function to handle link clicks and update active state
  const handleLinkClick = (path) => {
    // Call the parent navigation function
    if (onNavigate) {
        onNavigate(path); 
    }
    
    // Close sidebar on mobile after clicking a link
    if (window.innerWidth < 1024) { // 1024px is Tailwind's 'lg' breakpoint
      setIsSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Toggle Button - Renders outside the sidebar for easy access */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-full bg-blue-600 text-white shadow-lg transition-all"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Toggle sidebar menu"
      >
        {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar - Positioned fixed on the left */}
      <aside
        className={`
          fixed top-0 left-0 h-screen z-40 bg-white dark:bg-gray-800 shadow-2xl overflow-hidden
          flex flex-col transition-all duration-300 ease-in-out w-64
          ${isSidebarOpen ? 'translate-x-0' : 'transform -translate-x-full'}
          lg:translate-x-0 lg:w-64 
        `}
      >

        <div className="flex flex-col h-full overflow-y-auto pt-4 pb-20">

          {/* Top Section: Logo and Title */}
          <div className="flex items-center px-6 py-4 mb-6 border-b border-gray-100 dark:border-gray-700">
            <ShieldHalf className="w-8 h-8 text-blue-600 mr-2 flex-shrink-0" />
            <span className="text-xl font-extrabold text-gray-800 dark:text-white tracking-wide truncate">
              BECS HRMS
            </span>
          </div>

          {/* Main Navigation Options (Dynamically rendered based on role) */}
          <nav className="flex-grow space-y-2">
            {currentNavItems.map((item) => (
              <NavLink
                key={item.name}
                item={item}
                // Check if the current route matches the item's path
                isActive={currentPath === item.path} 
                onClick={handleLinkClick}
              />
            ))}
          </nav>

        </div>

        {/* Bottom Section: User Photo and Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="flex items-center justify-between p-2 rounded-xl bg-gray-50 dark:bg-gray-700 transition-shadow hover:shadow-md">
            {/* User Profile Info (Placeholder) */}
            <div className="flex items-center space-x-3">
              <UserCircle className="w-8 h-8 text-gray-400 dark:text-gray-300 flex-shrink-0" />
              <span className="text-sm font-semibold text-gray-800 dark:text-white truncate hidden sm:inline">{userRole.toUpperCase()} User</span>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="p-2 rounded-full text-red-500 hover:bg-red-100 dark:hover:bg-red-800/50 transition-colors flex-shrink-0"
              aria-label="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>

      </aside>

      {/* Mobile Overlay (Only visible when sidebar is open on small screens) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;