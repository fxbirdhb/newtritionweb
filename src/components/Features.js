import React from 'react';
import './Features.css';

function Features() {
  return (
    <div className="container features-section">
      <div className="row">
        <div className="col-md-6">
          <img src="path-to-image.jpg" alt="Feature Image" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>Light, Fast & Powerful</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          <div className="row feature-items">
            <div className="col-md-6 feature-item">
              <img src="path-to-icon1.png" alt="Feature Icon 1" />
              <h3>Title Goes Here</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
            </div>
            <div className="col-md-6 feature-item">
              <img src="path-to-icon2.png" alt="Feature Icon 2" />
              <h3>Title Goes Here</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
            </div>
            <div className="col-md-6 feature-item">
              <img src="path-to-icon3.png" alt="Feature Icon 3" />
              <h3>Title Goes Here</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
            </div>
            <div className="col-md-6 feature-item">
              <img src="path-to-icon4.png" alt="Feature Icon 4" />
              <h3>Title Goes Here</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
