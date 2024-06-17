import React, { useState } from 'react';
import './ShiningDotFeature.css';

function ShiningDotFeature({ title, description, image, imageWidth, customStyles }) {
  const [isHovered, setIsHovered] = useState(false);
  const [animationEnded, setAnimationEnded] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setAnimationEnded(false);
  };

  const handleAnimationEnd = () => {
    setIsHovered(false);
    setAnimationEnded(true);
  };

  return (
    <div
      className="shining-dot-feature"
      style={customStyles}
      onMouseEnter={handleMouseEnter}
    >
      <div className="shining-dot-feature-content">
        <h2 className="shining-dot-feature-title">{title}</h2>
        <p className="shining-dot-feature-description">{description}</p>
        <div className="shining-dot-feature-image-container" style={{ width: imageWidth }}>
          <img src={image} alt={title} className="shining-dot-feature-image" />
          {isHovered && !animationEnded && (
            <div
              className={`shining-glow ${isHovered ? 'active' : ''}`}
              onAnimationEnd={handleAnimationEnd}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShiningDotFeature;