import React from 'react';
import { PlusCircle } from 'lucide-react';

export default function EmployeeTable() {
    const employees = [
        { name: 'Abra Nelle Barron', id: '0027', email: 'Wocyn@gmail.com', dob: '1971-09-15', joinDate: '2020-05-21', status: 'Active' },
        { name: 'Thomas Goodman', id: '0028', email: 'Gapana@gmail.com', dob: '1989-07-25', joinDate: '2021-12-01', status: 'Active' },
        { name: 'Khubaib Ahmed', id: '0029', email: 'Khuba@gmail.com', dob: '1973-12-03', joinDate: '2019-01-31', status: 'Active' },
        { name: 'Uma Stafford', id: '0030', email: 'Nocun@gmail.com', dob: '1977-06-25', joinDate: '2020-05-21', status: 'Active' },
        { name: 'Marcus Doe', id: '0031', email: 'marcus@gmail.com', dob: '1995-01-01', joinDate: '2022-03-15', status: 'Active' },
    ];

    const getStatusBadge = (status) => {
        const color = status === 'Active' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
        return <span className={`px-3 py-1 text-xs font-bold rounded-full ${color}`}>{status}</span>;
    };

    return (
        <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 sm:mb-0">Employee List</h2>
                <div className="flex items-center space-x-3">
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl font-medium shadow-md hover:bg-blue-700 transition-colors text-sm">
                        <PlusCircle className="w-5 h-5 mr-2" /> Add New Employee
                    </button>
                    <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">See All</a>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                        <tr className="text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-50 dark:bg-gray-700">
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Id</th>
                            <th className="px-6 py-3">Email</th>
                            <th className="px-6 py-3">Date Of Birth</th>
                            <th className="px-6 py-3">Join Date</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {employees.map((emp, index) => (
                            <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{emp.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{emp.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 dark:text-blue-400">{emp.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{emp.dob}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{emp.joinDate}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(emp.status)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-500 dark:text-gray-300 cursor-pointer">...</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}