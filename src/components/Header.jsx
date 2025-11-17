import React, { useState, useRef, useEffect } from 'react';
import { FiBell, FiSearch, FiUser, FiMenu } from 'react-icons/fi';
import ProfileDropdown from './DropDown/ProfileDropdown';

import NotificationsDropdown from './DropDown/NotificationsDropdown';

const Header = ({ onToggleSidebar, isSidebarOpen }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const profileRef = useRef(null);
  const notificationsRef = useRef(null);

  // Fermer les dropdowns quand on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
    if (isNotificationsOpen) setIsNotificationsOpen(false);
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    if (isProfileOpen) setIsProfileOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left side - Toggle + Breadcrumb */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={onToggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
          >
            <FiMenu className="text-gray-600 text-lg" />
          </button>

          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Dashboard-active
            </h1>
            <nav className="flex text-sm text-gray-500 mt-1">
              <span>Home</span>
              <span className="mx-2">›</span>
              <span>Dashboard</span>
              <span className="mx-2">›</span>
              <span className="text-blue-600">Dashboard-active</span>
            </nav>
          </div>
        </div>

        {/* Right side - Search and User */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          {/* Notifications Dropdown */}
          <div className="relative" ref={notificationsRef}>
            <button 
              onClick={toggleNotifications}
              className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FiBell className="text-xl" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <NotificationsDropdown 
              isOpen={isNotificationsOpen} 
              onClose={() => setIsNotificationsOpen(false)}
            />
          </div>
          
          {/* Profile Dropdown */}
          <div className="relative" ref={profileRef}>
            <button 
              onClick={toggleProfile}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <FiUser className="text-white text-sm" />
              </div>
              <span className="text-sm font-medium text-gray-700">Admin</span>
            </button>
            
            <ProfileDropdown 
              isOpen={isProfileOpen} 
              onClose={() => setIsProfileOpen(false)}
              user={{ name: 'Admin' }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;