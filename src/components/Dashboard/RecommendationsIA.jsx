import React from 'react';

const RecommendationsIA = () => {
  const recommendations = [
    {
      title: "Baissez de 1°C",
      description: "Économie potentielle : 7% sur le chauffage"
    },
    {
      title: "Douches plus courtes", 
      description: "Passez à 5 min pour économiser 15 kWh/mois"
    },
    {
      title: "Comparez-vous",
      description: "Vos voisins consomment 12% de moins"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-full">

      <h3 className="text-lg font-semibold text-gray-800 mb-4">Recommandations IA</h3>
      
      <div className="space-y-4">
        {recommendations.map((recommendation, index) => (
          <div key={index} className="p-3 bg-blue-50 rounded-lg border border-blue-100">
            <h4 className="font-semibold text-blue-800 text-sm mb-1">
              {recommendation.title}
            </h4>
            <p className="text-xs text-blue-600">
              {recommendation.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsIA;