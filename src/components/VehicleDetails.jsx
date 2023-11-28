// src/components/VehicleDetails.jsx
import React from 'react';

const VehicleDetails = ({ video }) => {
  return (
    <div>
      <h2>{video.name}</h2>
      <p>
        Video Link: <a href={video.videoLink}>{video.videoLink}</a>
      </p>
      <p>Video Date: {video.videoDate}</p>
      <p>Brand: {video.brand}</p>
      <p>Model: {video.model}</p>
      <p>Vehicle Type: {video.vehicleType}</p>
    </div>
  );
};

export default VehicleDetails;
