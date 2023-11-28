// src/App.jsx
import React, { useState } from 'react';
import AdminPage from './pages/AdminPage';
import VehicleListPage from './pages/VehicleListPage';
import VehicleDetailsPage from './pages/VehicleDetailsPage';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleAddVideo = (newVideo) => {
    setVideos((prevVideos) => [...prevVideos, newVideo]);
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div>
      {!selectedVideo && (
        <div>
          <button onClick={() => setSelectedVideo(null)}>Back to List</button>
          <AdminPage onAddVideo={handleAddVideo} />
          <VehicleListPage videos={videos} onVideoClick={handleVideoClick} />
        </div>
      )}

      {selectedVideo && <VehicleDetailsPage video={selectedVideo} />}
    </div>
  );
};

export default App;
