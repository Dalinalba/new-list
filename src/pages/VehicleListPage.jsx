// src/pages/VehicleListPage.jsx
import React from 'react';
import VehicleList from '../components/VehicleList';

const VehicleListPage = ({ videos, onVideoClick }) => {
  return (
    <div>
      <h1>Vehicle List Page</h1>
      <VehicleList videos={videos} onVideoClick={onVideoClick} />
    </div>
  );
};

export default VehicleListPage;
