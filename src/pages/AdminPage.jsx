import React, { useState } from 'react';
import AdminForm from '../components/AdminForm';
function AdminPage({ navigateTo }) {
    // ... your existing component code
    const handleAddVideo = (newVideo) => {
        // You can save the new video to the JSON file or perform other actions here
        // For simplicity, we're not persisting the data in this example
        navigateTo('list');
      };

    return (
      <div>
        <h1>Admin Page</h1>
      <AdminForm onAddVideo={handleAddVideo} />
        <button onClick={() => navigateTo('list')}>Go to List</button>
      </div>
    );
  }
  export default AdminPage;
