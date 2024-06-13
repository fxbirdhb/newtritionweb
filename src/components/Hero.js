import React from 'react';
import './Hero.css';

function Hero({ buttonSize = 'medium', buttonImage, buttonLink }) {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>新煮意：您的健康管理智能助理</h1>
          <p>集饮食日记、健康计划和智能助理功能于一体的个人健康管理应用程序。</p>
          <div className={`btn-container ${buttonSize}`}>
            <a className="btn btn-primary" href={buttonLink} target="_blank" rel="noopener noreferrer">
              <img src={buttonImage} alt="Button Icon" className="button-icon" />
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <img src="/images/hero-right-image.jpg" alt="Healthy Lifestyle" className="hero-image" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
