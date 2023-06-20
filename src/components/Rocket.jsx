import React, { useState, useEffect } from 'react';
import RocketGif from '../images/rocket.gif';

const Rocket = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (position === 1000) {
        clearInterval(interval);
      } else {
        setPosition((prevPosition) => prevPosition + 4);
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [position]);

  return (
    <div>
      <img src={RocketGif} alt="rocket gif"
        style={{
          position: 'absolute',
          bottom: `${position}px`,
          left: '80%',
        }}
      />
    </div>

  );
};

export default Rocket;