// src/pages/AdminPage.jsx
import React, { useState } from 'react';
import AdminForm from '../components/AdminForm';

const AdminPage = ({ onAddVideo }) => {
  return (
    <div>
      <h1>Admin Page</h1>
      <AdminForm onAddVideo={onAddVideo} />
    </div>
  );
};

export default AdminPage;
