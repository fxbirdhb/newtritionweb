// VideoFeature.js
import React from 'react';
import './Feature.css'; // 复用Feature.css样式

function VideoFeature({ title, description, video, customStyles }) {
  return (
    <div className="feature" style={customStyles}>
      <div className="feature-content">
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
      </div>
      <div className="feature-video-container">
        <video className="feature-video" autoPlay muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoFeature;