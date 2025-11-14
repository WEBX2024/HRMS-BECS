import React from 'react';

export default function RecruitmentCard() {
    const departments = [
        { name: 'IT Student', count: 28, color: 'bg-blue-600' },
        { name: 'Software', count: 19, color: 'bg-indigo-500' },
        { name: 'Data Analysis', count: 36, color: 'bg-cyan-500' },
    ];

    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl h-full flex flex-col border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Recruitment</h2>
            <div className="space-y-6 flex-grow">
                {departments.map((dept, index) => (
                    <div key={index}>
                        <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300 mb-1">
                            <span className="font-medium">{dept.name} ({dept.count})</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                            <div 
                                className={`h-3 rounded-full ${dept.color}`}
                                style={{ width: `${(dept.count / 50) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Simple X-axis scale placeholder */}
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-6 pt-4 border-t dark:border-gray-700">
                <span>0</span><span>100</span><span>200</span><span>300</span><span>400</span><span>500</span>
            </div>
        </div>
    );
}