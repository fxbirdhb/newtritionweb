import React from 'react';
import Feature from './Feature';
import VideoFeature from './VideoFeature';
import HoverFeature from './HoverFeature';
import FallingTextFeature from './FallingTextFeature';
import './FeatureList.css';

function FeatureList({ features, featureWidths }) {
  return (
    <div className="container">
      <div className="row">
        {features.map((feature, index) => {
          let FeatureComponent;
          switch (feature.type) {
            case 'video':
              FeatureComponent = VideoFeature;
              break;
            case 'hover':
              FeatureComponent = HoverFeature;
              break;
            case 'fallingText':
              FeatureComponent = FallingTextFeature;
              break;
            default:
              FeatureComponent = Feature;
              break;
          }
          console.log('Rendering FeatureComponent:', FeatureComponent.name); // 检查组件类型
          return (
            <div
              key={index}
              className={`col-lg-${featureWidths[index].lg} col-md-${featureWidths[index].md} col-sm-12 mb-4`}
            >
              <FeatureComponent
                title={feature.title}
                description={feature.description}
                image={feature.image}
                hoverImage={feature.hoverImage}
                video={feature.video}
                text={feature.text}
                charsPerLine={feature.charsPerLine}
                imageWidth={feature.imageWidth}
                customStyles={feature.customStyles}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeatureList;