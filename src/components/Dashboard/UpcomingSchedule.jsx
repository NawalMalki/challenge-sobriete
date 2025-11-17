import React from 'react';

const UpcomingSchedule = () => {
  const events = [
    {
      date: 'Wed, 11 Jan',
      time: '09:20 AM', 
      title: 'Business Analytics Press',
      description: 'Exploring the Future of Data-Driven +6 more'
    },
    {
      date: 'Fri, 15 Feb',
      time: '10:35 AM',
      title: 'Business Sprint', 
      description: 'Techniques from Business Sprint +2 more'
    },
    {
      date: 'Thu, 18 Mar',
      time: '01:15 AM',
      title: 'Customer Review Meeting',
      description: 'Insights from the Customer Review Meeting +8 more'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-96"> {/* Hauteur fixe */}
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Schedule</h3>
      
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <input type="checkbox" className="mt-1 rounded border-gray-300" />
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-sm font-medium text-gray-800">{event.date}</span>
                <span className="text-xs text-gray-500">{event.time}</span>
              </div>
              <h4 className="font-semibold text-gray-800 text-sm">{event.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;