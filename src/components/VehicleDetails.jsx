
import React from 'react';

const VehicleDetails = ({ video, navigateTo }) => {
  return (
    <div>
      <h2>{video.name} Details</h2>
      <p>
        Video Link: <a href={video.videoLink} target="_blank" rel="noopener noreferrer">{video.videoLink}</a>
      </p>
      <p>Video Date: {video.videoDate}</p>
      <p>Brand: {video.brand}</p>
      <p>Model: {video.model}</p>
      <p>Electric Vehicle Type: {video.electricVehicleType}</p>
      <button onClick={() => navigateTo('list')}>Back to List</button>
    </div>
  );
};

export default VehicleDetails;
