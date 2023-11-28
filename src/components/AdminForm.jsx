
import React, { useState } from 'react';

const AdminForm = ({ onAddVideo }) => {
  const [videoInfo, setVideoInfo] = useState({
    name: '',
    videoLink: '',
    videoDate: '',
    brand: '',
    model: '',
    electricVehicleType: 'BEVs', // Default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideoInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddVideo(videoInfo);
    // You might want to reset the form or perform additional actions here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={videoInfo.name} onChange={handleChange} required />

      <label>Video Link:</label>
      <input type="text" name="videoLink" value={videoInfo.videoLink} onChange={handleChange} required />

      <label>Video Date:</label>
      <input type="date" name="videoDate" value={videoInfo.videoDate} onChange={handleChange} required />

      <label>Brand:</label>
      <input type="text" name="brand" value={videoInfo.brand} onChange={handleChange} required />

      <label>Model:</label>
      <input type="text" name="model" value={videoInfo.model} onChange={handleChange} required />

      <label>Electric Vehicle Type:</label>
      <select name="electricVehicleType" value={videoInfo.electricVehicleType} onChange={handleChange}>
        <option value="BEVs">Battery Electric Vehicles (BEVs)</option>
        <option value="PHEVs">Plug-in Hybrid Electric Vehicles (PHEVs)</option>
        <option value="HEVs">Hybrid Electric Vehicles (HEVs)</option>
      </select>

      <button type="submit">Add Video</button>
    </form>
  );
};

export default AdminForm;
