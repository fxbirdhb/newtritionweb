import React, { useState, useRef, useEffect } from 'react';
import './FallingTextFeature.css';

function FallingTextFeature({ text, customStyles, charsPerLine }) {
  const [visibleChars, setVisibleChars] = useState([]);
  const [hasFallen, setHasFallen] = useState(false);
  const featureRef = useRef(null);
  const chars = text.split('');
  const timeouts = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasFallen) {
          console.log('Component entered viewport');
          // 设置定时器以逐个字符掉落
          chars.forEach((char, i) => {
            const timeout = setTimeout(() => {
              setVisibleChars((prev) => {
                const updatedChars = [...prev, char];
                console.log(`Updating visibleChars (${i}):`, updatedChars);
                return updatedChars;
              });
            }, i * 100);
            console.log(`Setting timeout for char ${char} at index ${i}`);
            timeouts.current.push(timeout);
          });
          setHasFallen(true);
        }
      },
      { threshold: 0.5 }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      observer.disconnect();
      // 将定时器存储到局部变量
      //const savedTimeouts = [...timeouts.current];
      //savedTimeouts.forEach(clearTimeout);
      timeouts.current = [];
    };
  }, [chars, hasFallen]);

  return (
    <div 
      ref={featureRef}
      className="falling-text-feature" 
      style={customStyles}
    >
      <div className="falling-text-content">
        <div className="falling-text">
          {visibleChars.map((char, index) => (
            <span 
              key={index} 
              style={{ 
                width: `${100 / charsPerLine}%`, 
                color: '#000', 
                animationDelay: `${index * 0.002}s` 
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FallingTextFeature;