import React from 'react';
import { 
  FiHome, FiPieChart, FiAward, FiUsers, FiCalendar,
  FiDroplet, FiClock, FiAlertTriangle, FiTrendingDown,
  FiBarChart2
} from 'react-icons/fi';
import logo from '../assets/logoo.jpeg';

const Sidebar = ({ isOpen }) => {
  const menuItems = [
    {
      title: "DASHBOARD",
      items: [
        { icon: <FiHome />, label: "Tableau de bord", active: true },
        { icon: <FiPieChart />, label: "Analyses détaillées" },
        { icon: <FiAlertTriangle />, label: "Alertes & Recommandations" }
      ]
    },
    {
      title: "DÉFIS & JEUX",
      items: [
        { icon: <FiAward />, label: "Défis disponibles" },
        { icon: <FiTrendingDown />, label: "Défi Température" },
        { icon: <FiDroplet />, label: "Chrono Douche" },
        { icon: <FiClock />, label: "Cuisine Maligne" },
        { icon: <FiBarChart2 />, label: "Économie Éclair" }
      ]
    },
    {
      title: "COMMUNAUTÉ",
      items: [
        { icon: <FiUsers />, label: "Classement" },
        { icon: <FiUsers />, label: "Fil d'actualité" },
        { icon: <FiCalendar />, label: "Événements" },
        { icon: <FiAward />, label: "Récompenses" }
      ]
    }
  ];

  return (
    <div 
      className={`bg-white shadow-lg h-screen overflow-y-auto transition-all duration-300
      ${isOpen ? "w-64" : "w-20"}`}
    >
      {/* Header logo seulement */}
      <div className="sticky top-0 bg-white z-10 border-b border-gray-200">
        <div className={`p-4 flex ${isOpen ? "justify-start" : "justify-center"}`}>
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="GazSmart Logo" 
              className="w-10 h-10 object-contain"
            />
            {isOpen && (
              <div>
                <h1 className="text-xl font-bold text-green-600">GazSmart</h1>
                <p className="text-xs text-gray-500">Sobriété énergétique</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-2 pb-6 mt-4">
        {menuItems.map((section, index) => (
          <div key={index} className="mb-6">
            {/* Section title */}
            {isOpen && (
              <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                {section.title}
              </h3>
            )}

            <ul>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a
                    href="#"
                    className={`flex items-center px-4 py-3 text-sm font-medium 
                      transition-colors duration-200 rounded-lg mx-1
                      ${item.active
                        ? 'text-green-600 bg-green-50 border-r-2 border-green-600'
                        : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
                      }
                      ${isOpen ? "justify-start" : "justify-center"}`}
                  >
                    <span className={`${isOpen ? "mr-3" : ""} text-lg`}>
                      {item.icon}
                    </span>
                    {isOpen && (
                      <span className="truncate">
                        {item.label}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;