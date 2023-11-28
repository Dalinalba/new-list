import React from 'react';
import VehicleDetails from '../components/VehicleDetails';

function VehicleDetailsPage({ navigateTo, video }) {
    // ... your existing component code

    return (
      <div>
        <h1>Vehicle Details Page</h1>
      <VehicleDetails navigateTo={navigateTo} video={video} />
        <button onClick={() => navigateTo('list')}>Go to List</button>
      </div>
    );
  }
  export default VehicleDetailsPage;
