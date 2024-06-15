import React from 'react';
import './Feature.css';

function Feature({ title, description, image, imageWidth, customStyles }) {
  return (
    <div className="feature" style={customStyles}>
      <div className="feature-content">
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
      </div>
      <div className="feature-image-container" style={{ width: imageWidth }}>
        <img src={image} alt={title} className="feature-image" />
      </div>
    </div>
  );
}

export default Feature;