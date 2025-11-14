import React from 'react';

export default function LeaveRequestsCard() {
    const requests = [
        { name: 'Maisha Lucy', reason: 'Sick', status: 'Approved' },
        { name: 'Zamora Peck', reason: 'Sick', status: 'Rejected' },
        { name: 'Amy Aphrodite', reason: 'Sick', status: 'Approved' },
        { name: 'Maisha Lucy', reason: 'Sick', status: 'Requested' },
    ];

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Approved': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
            case 'Rejected': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
            case 'Requested': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
            default: return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
        }
    };

    return (
        <div className="h-full p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex flex-col border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Leave Application</h2>
                <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">See All</a>
            </div>
            
            <div className="space-y-4 flex-grow overflow-y-auto">
                {requests.map((req, index) => (
                    <div key={index} className="flex justify-between items-start py-2 border-b dark:border-gray-700 last:border-b-0">
                        <div className="flex flex-col">
                            <p className="font-medium text-gray-800 dark:text-white">{req.name}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Reason: {req.reason}</p>
                        </div>
                        <div className="flex-shrink-0">
                            <span className={`px-3 py-1 text-xs font-bold rounded-full ${getStatusStyle(req.status)}`}>
                                {req.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}