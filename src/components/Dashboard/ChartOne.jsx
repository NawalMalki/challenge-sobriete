import React from 'react';

const EstimatedRevenue = () => {
  const monthlyData = [
    { month: 'Jan', value: 80 },
    { month: 'Feb', value: 120 },
    { month: 'Mar', value: 90 },
    { month: 'Apr', value: 150 },
    { month: 'May', value: 180 },
    { month: 'Jun', value: 200 },
    { month: 'Jul', value: 170 },
    { month: 'Aug', value: 190 },
    { month: 'Sep', value: 220 },
    { month: 'Oct', value: 180 },
    { month: 'Nov', value: 160 },
    { month: 'Dec', value: 140 }
  ];

  const maxValue = 250;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-full">

      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Estimated Revenue</h3>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-lg font-medium">
            Monthly
          </button>
          <button className="px-3 py-1 text-xs text-gray-600 hover:bg-gray-100 rounded-lg font-medium">
            Quarterly
          </button>
          <button className="px-3 py-1 text-xs text-gray-600 hover:bg-gray-100 rounded-lg font-medium">
            Annually
          </button>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-4">Target you've set for each month</p>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-2xl font-bold text-gray-800">$212,142.12</p>
          <p className="text-sm text-green-600 font-medium">+23.2%</p>
          <p className="text-xs text-gray-500">Avg. Yearly Profit</p>
        </div>
        <div className="bg-red-50 rounded-lg p-4">
          <p className="text-2xl font-bold text-gray-800">$30,321.23</p>
          <p className="text-sm text-red-600 font-medium">-12.3%</p>
          <p className="text-xs text-gray-500">Avg. Yearly Profit</p>
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-32">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-400">
          <span>250</span>
          <span>200</span>
          <span>150</span>
          <span>100</span>
          <span>50</span>
          <span>0</span>
        </div>

        {/* Bars */}
        <div className="absolute left-8 right-0 top-0 bottom-0 flex items-end justify-between px-2">
          {monthlyData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="w-4 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-400"
                style={{ height: `${(item.value / maxValue) * 100}%` }}
              ></div>
              <span className="text-xs text-gray-500 mt-1">{item.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EstimatedRevenue;