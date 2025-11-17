import React from 'react';
import { FiUser, FiSettings, FiLogOut, FiHelpCircle } from 'react-icons/fi';

const ProfileDropdown = ({ isOpen, onClose, user = { name: 'Admin' } }) => {
  if (!isOpen) return null;

  const menuItems = [
    { icon: FiUser, label: 'Mon profil', onClick: () => console.log('Profil cliqué') },
    { icon: FiSettings, label: 'Paramètres', onClick: () => console.log('Paramètres cliqué') },
    { icon: FiHelpCircle, label: 'Aide & Support', onClick: () => console.log('Aide cliqué') },
  ];

  const handleMenuItemClick = (onClick) => {
    onClick();
    onClose();
  };

  return (
    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
      {/* En-tête du profil */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <FiUser className="text-white text-sm" />
          </div>
          <div>
            <p className="font-medium text-gray-900">{user.name}</p>
            <p className="text-sm text-gray-500">Administrateur</p>
          </div>
        </div>
      </div>

      {/* Menu items */}
      <div className="p-2">
        {menuItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <button
              key={index}
              onClick={() => handleMenuItemClick(item.onClick)}
              className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              <IconComponent className="text-gray-400 text-base" />
              <span>{item.label}</span>
            </button>
          );
        })}
        
        {/* Séparateur */}
        <div className="my-1 border-t border-gray-200"></div>
        
        {/* Déconnexion */}
        <button 
          onClick={() => {
            console.log('Déconnexion');
            onClose();
          }}
          className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
        >
          <FiLogOut className="text-red-400 text-base" />
          <span>Déconnexion</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;