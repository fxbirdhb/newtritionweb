import React from 'react';
import Feature from './Feature';
import './FeatureList.css';

function FeatureList() {
  const features = [
    {
      title: "Writing, focus, and communication.",
      description: "New Writing Tools and language capabilities help you write, summarize longer text, and prioritize notifications.",
      image: "/images/feature1.png",
      imageWidth: "60%", // 设置图片宽度为60%,
      feature: "feature"
    },
    {
      title: "Delightful images created just for you.",
      description: "Create images to express yourself, craft Genmoji for conversations, or revisit favorite moments with your own memory movies.",
      image: "/images/feature2.png",
      imageWidth: "35%", // 设置图片宽度为30%
      feature: "feature1"
    }
  ];

  return (
    <div className="feature-list">
      {features.map((feature, index) => (
        <Feature 
          key={index}
          title={feature.title}
          description={feature.description}
          image={feature.image}
          imageWidth={feature.imageWidth}
          feature={feature.feature}
        />
      ))}
    </div>
  );
}

export default FeatureList;