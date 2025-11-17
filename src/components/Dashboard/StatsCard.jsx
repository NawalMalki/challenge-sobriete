import React from 'react';
import { FiTrendingUp, FiUsers, FiShoppingCart, FiBarChart } from 'react-icons/fi';

const StatsCard = ({ title, value, percentage, icon, trend }) => {
  const icons = {
    revenue: <FiTrendingUp className="text-2xl text-green-500" />,
    users: <FiUsers className="text-2xl text-blue-500" />,
    orders: <FiShoppingCart className="text-2xl text-orange-500" />,
    conversion: <FiBarChart className="text-2xl text-purple-500" />
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
          <div className={`flex items-center mt-2 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            <span className="text-sm font-medium">{percentage}</span>
            <span className="text-xs ml-1">from last month</span>
          </div>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          {icons[icon]}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;