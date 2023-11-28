

import './App.css'
import React, { useState } from 'react';
import AdminPage from './pages/AdminPage';
import VehicleListPage from './pages/VehicleListPage';
import VehicleDetailsPage from './pages/VehicleDetailsPage';
import Header from './Components/Header'

function App() {
    const [currentPage, setCurrentPage] = useState('admin');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'admin':
        return <AdminPage navigateTo={navigateTo} />;
      case 'list':
        return <VehicleListPage navigateTo={navigateTo} />;
      case 'details':
        return <VehicleDetailsPage navigateTo={navigateTo} />;
      default:
        return null;
    }
  };
  return (
<>
    <div>
    <Header/>
    </div>
    <div>{renderPage()}</div>
    </>
  )
}

export default App
