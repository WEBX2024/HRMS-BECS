import React from 'react';
import { Search } from 'lucide-react';

export default function DashboardSearchBar() {
  return (
    <div className="relative mb-8">
      <input
        type="text"
        placeholder="Search your data"
        className="w-full pl-12 pr-4 py-3 text-lg border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-blue-500 focus:border-blue-500 shadow-xl"
      />
      <Search className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
    </div>
  );
}