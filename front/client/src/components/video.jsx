import React, { useEffect, useState } from "react";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("Please log in to view media.");
          return;
        }

        const response = await fetch("http://localhost:5000/api/media/", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched Videos:", data); // Debugging: Check if URLs are correct
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchMedia();
  }, []);

  return (
    <div>
      <h2>Video List</h2>
      {videos.length === 0 ? (
        <p>Loading videos...</p>
      ) : (
        videos.map((video) => (
          <div key={video.id}>
            <h3>{video.title}</h3>
            <video width="400" controls>
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))
      )}
    </div>
  );
};

export default VideoList;
