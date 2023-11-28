// src/pages/VehicleDetailsPage.jsx
import React from 'react';
import VehicleDetails from '../components/VehicleDetails';

const VehicleDetailsPage = ({ video }) => {
  return (
    <div>
      <h1>Vehicle Details Page</h1>
      <VehicleDetails video={video} />
    </div>
  );
};

export default VehicleDetailsPage;
