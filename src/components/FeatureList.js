import React from 'react';
import Feature from './Feature';
import VideoFeature from './VideoFeature';
import './FeatureList.css';

function FeatureList({ features, featureWidths }) {
  return (
    <div className="container">
      <div className="row">
        {features.map((feature, index) => {
          const FeatureComponent = feature.type === 'video' ? VideoFeature : Feature;
          return (
            <div
              key={index}
              className={`col-lg-${featureWidths[index].lg} col-md-${featureWidths[index].md} col-sm-12 mb-4`}
            >
              <FeatureComponent
                title={feature.title}
                description={feature.description}
                image={feature.image}
                video={feature.video}
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