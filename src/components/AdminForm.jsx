// src/components/AdminForm.jsx
import React, { useState } from 'react';

const AdminForm = ({ onAddVideo }) => {
  const [formData, setFormData] = useState({
    name: '',
    videoLink: '',
    videoDate: '',
    brand: '',
    model: '',
    vehicleType: 'BEVs',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddVideo(formData);
    // You may want to reset the form fields here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Video Link:
        <input type="text" name="videoLink" value={formData.videoLink} onChange={handleChange} />
      </label>
      <br />
      <label>
        Video Date:
        <input type="text" name="videoDate" value={formData.videoDate} onChange={handleChange} />
      </label>
      <br />
      <label>
        Brand:
        <input type="text" name="brand" value={formData.brand} onChange={handleChange} />
      </label>
      <br />
      <label>
        Model:
        <input type="text" name="model" value={formData.model} onChange={handleChange} />
      </label>
      <br />
      <label>
        Vehicle Type:
        <select name="vehicleType" value={formData.vehicleType} onChange={handleChange}>
          <option value="BEVs">Battery Electric Vehicles (BEVs)</option>
          <option value="PHEVs">Plug-in Hybrid Electric Vehicles (PHEVs)</option>
          <option value="HEVs">Hybrid Electric Vehicles (HEVs)</option>
        </select>
      </label>
      <br />
      <button type="submit">Add Video</button>
    </form>
  );
};

export default AdminForm;
