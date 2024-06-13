import React from 'react';
import Hero from './Hero';

function Home() {
  return (
    <div>
      <Hero 
        buttonSize="small" 
        buttonImage="/images/download.svg" 
        buttonLink="https://apps.apple.com/us/app/新煮意/id6463604621"
      />
      <div className="container">
        {/* 这里可以添加其他内容 */}
      </div>
    </div>
  );
}

export default Home;
