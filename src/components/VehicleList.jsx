// src/components/VehicleList.jsx
import React from 'react';

const VehicleList = ({ videos, onVideoClick }) => {
  return (
    <div>
      <h2>Vehicle List</h2>
      <ul>
        {videos.map((video) => (
          <li key={video.name}>
            <a href="#" onClick={() => onVideoClick(video)}>
              {video.name}
            </a>{' '}
            - {video.videoDate} - {video.brand} - {video.model} - {video.vehicleType}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;
