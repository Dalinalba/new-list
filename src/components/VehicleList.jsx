// VehicleList.jsx
import React from 'react';

const VehicleList = ({ videos, navigateTo }) => {
  return (
    <div>
      <h2>Video List</h2>
      <ul>
        {videos.map((video) => (
          <li key={video.name}>
            <button onClick={() => navigateTo('details', { name: video.name })}>{video.name}</button> - {video.videoDate}, {video.brand}, {video.model}, {video.electricVehicleType}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;
