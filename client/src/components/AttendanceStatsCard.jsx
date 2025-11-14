import React from 'react';

export default function AttendanceStatsCard() {
    // Placeholder data representing daily percentages
    const data = [
      { day: 'Sun', present: 85, absent: 15 },
      { day: 'Mon', present: 70, absent: 30 },
      { day: 'Tue', present: 95, absent: 5 },
      { day: 'Wed', present: 88, absent: 12 },
      { day: 'Thu', present: 65, absent: 35 },
      { day: 'Fri', present: 90, absent: 10 },
      { day: 'Sat', present: 98, absent: 2 },
    ];
    
    return (
        <div className="h-full p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Daily attendance statistic</h2>
            <div className="text-sm text-gray-600 dark:text-gray-300 flex justify-between items-center mb-6">
                <span className="text-blue-600 font-medium">IT Student</span>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span> Present</div>
                    <div className="flex items-center"><span className="w-2 h-2 rounded-full bg-pink-500 mr-2"></span> Absent</div>
                </div>
            </div>
            
            <div className="h-56 mt-4 flex justify-between space-x-2">
                {/* Y-Axis scale placeholder (optional, can be done with absolute positioning) */}

                {/* Bar Chart Visualization */}
                {data.map((item) => (
                    <div key={item.day} className="flex flex-col items-center w-1/7 h-full">
                        <div className="flex flex-col justify-end w-4/5 h-full relative">
                            {/* Absent Bar (Pink) */}
                            <div 
                                className="bg-pink-500 w-full transition-all duration-700"
                                style={{ height: `${item.absent}%`, borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }}
                            />
                            {/* Present Bar (Blue) */}
                            <div 
                                className="bg-blue-600 w-full transition-all duration-700"
                                style={{ height: `${item.present}%`, borderBottomLeftRadius: '4px', borderBottomRightRadius: '4px' }}
                            />
                        </div>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-2">{item.day}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}