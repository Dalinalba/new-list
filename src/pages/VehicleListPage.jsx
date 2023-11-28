import React from 'react';
import VehicleList from '../components/VehicleList';

function VehicleListPage({ navigateTo, videos }) {
    // ... your existing component code

    return (
      <div>
        <h1>Vehicle List Page</h1>
      <VehicleList navigateTo={navigateTo} videos={videos} />
        <button onClick={() => navigateTo('admin')}>Go to Admin</button>
      </div>
    );
  }
export default VehicleListPage;
