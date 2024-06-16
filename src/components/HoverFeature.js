import React, { useEffect, useRef, useState } from 'react';
import './HoverFeature.css';

function HoverFeature({ title, description, image, hoverImage, customStyles }) {
  const [flipped, setFlipped] = useState(false);
  const featureRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFlipped(true);
        } else {
          setFlipped(false);
        }
      },
      { threshold: 0.5 } // 50%的可见性
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, []);

  return (
    <div ref={featureRef} className={`hover-feature ${flipped ? 'flip' : ''}`} style={customStyles}>
      <div className="hover-feature-content">
        <h3 className="hover-feature-title">{title}</h3>
        <p className="hover-feature-description">{description}</p>
      </div>
      <div className="hover-feature-image-container">
        <img src={image} alt={title} className="hover-feature-image front" />
        <img src={hoverImage} alt={title} className="hover-feature-hover-image back" />
      </div>
    </div>
  );
}

export default HoverFeature;