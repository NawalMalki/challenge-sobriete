import React from 'react';
import StatsCard from '../components/Dashboard/StatsCard';
import ChartOne from '../components/Dashboard/ChartOne';
import SalesCategory from '../components/Dashboard/SalesCategory';
import UpcomingSchedule from '../components/Dashboard/UpcomingSchedule';
import RecommendationsIA from '../components/Dashboard/RecommendationsIA';

const Dashboard = () => {

  const salesData = [
    { label: " Chauffage", percent: 48, value: 2040, color: "#3B82F6" },
    { label: "Eau chaude sanitaire ", percent: 33, value: 1402, color: "#60A5FA" },
    { label: "Cuisson", percent: 19, value: 510,  color: "#93C5FD" },
  ];

  return (
    <div className="p-6 space-y-6">

      {/* Stats Grid (UNCHANGED as you requested) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatsCard title="Consommation Totale" value="93.9" percentage="+12.5%" icon="revenue" trend="up" />
        <StatsCard title=" Classement immeuble" value="3" percentage="+8.2%" icon="users" trend="up" />
        <StatsCard title="Economie réalisée" value="6%" percentage="+2.1%" icon="orders" trend="up" />
        <StatsCard title="Température moyenne" value="19.1°C" percentage="+0.3%" icon="conversion" trend="up" />
      </div>

      {/* ROW 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* Left: Estimated Revenue */}
        <div className="lg:col-span-2 h-full">
          <ChartOne />
        </div>

        {/* Right: Sales Category */}
        <div className="h-full">
          <SalesCategory data={salesData} />
        </div>

      </div>

      {/* ROW 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left: Recommendations IA */}
        <div className="lg:col-span-2 h-full">
          <RecommendationsIA />
        </div>

        {/* Right: Upcoming Schedule */}
        <div className="h-full">
          <UpcomingSchedule />
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
