import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import './index.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <div className="flex-shrink-0">
          <Sidebar isOpen={isSidebarOpen} />
        </div>
        
        {/* Main content */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Header avec toggle */}
          <header className="flex-shrink-0">
            <Header 
              onToggleSidebar={toggleSidebar} 
              isSidebarOpen={isSidebarOpen} 
            />
          </header>
          
          {/* Main content */}
          <main className="flex-1 overflow-auto p-6 bg-gray-50">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
          
          {/* Footer */}
          <footer className="flex-shrink-0">
            <Footer />
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;