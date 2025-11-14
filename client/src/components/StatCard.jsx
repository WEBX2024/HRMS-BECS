import React from 'react';
import { TrendingUp, TrendingDown, Users } from 'lucide-react';

export default function StatCard({ 
    title = "Metric Title", 
    value = "0", 
    change = 0, 
    description = "Details about change", 
    // eslint-disable-next-line no-unused-vars
    Icon = Users 
}) {
    const isPositive = change > 0;
    const ChangeIcon = isPositive ? TrendingUp : TrendingDown;
    const changeColor = isPositive ? 'text-green-600' : 'text-red-600';
    const changeBg = isPositive ? 'bg-green-100/70 dark:bg-green-900/40' : 'bg-red-100/70 dark:bg-red-900/40';

    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl transition-shadow hover:shadow-2xl flex flex-col justify-between h-full border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{title}</h3>
                {/* Icon is rendered as a component here */}
                <Icon className="w-8 h-8 text-blue-600 opacity-70 flex-shrink-0" />
            </div>
            <p className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">{value}</p>
            <div className="flex items-center space-x-2">
                <div className={`flex items-center px-3 py-1 rounded-full text-xs font-semibold ${changeColor} ${changeBg}`}>
                    <ChangeIcon className="w-3 h-3 mr-1" />
                    {Math.abs(change)}%
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{description}</p>
            </div>
        </div>
    );
}