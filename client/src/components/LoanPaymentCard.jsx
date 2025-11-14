import React from 'react';
import { TrendingDown } from 'lucide-react';

export default function LoanPaymentCard() {
    const percentage = 75; // 75% loan payment progress (based on image)
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl h-full flex flex-col items-center justify-center border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between w-full mb-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Loan Pay Received</h2>
                <div className="text-red-500 flex items-center text-sm font-medium">
                    -31% <TrendingDown className="w-4 h-4 ml-1" />
                </div>
            </div>
            
            {/* Radial Chart Visualization */}
            <div className="relative w-40 h-40">
                <svg className="w-full h-full transform -rotate-90">
                    {/* Background Circle */}
                    <circle 
                        className="text-gray-200 dark:text-gray-700 stroke-current"
                        strokeWidth="10"
                        fill="transparent"
                        r={radius}
                        cx="80"
                        cy="80"
                    />
                    {/* Arc/Progress Bar */}
                    <circle
                        className="text-blue-600 stroke-current"
                        strokeWidth="10"
                        strokeLinecap="round"
                        fill="transparent"
                        r={radius}
                        cx="80"
                        cy="80"
                        style={{
                            strokeDasharray: circumference,
                            strokeDashoffset: offset,
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                        }}
                    />
                </svg>
                {/* Center Text */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">$8440</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Loan Amount</p>
                </div>
            </div>

            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Total Loan Amount: ~$31 People</p>
        </div>
    );
}