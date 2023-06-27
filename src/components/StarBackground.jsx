import React, { useEffect, useState } from 'react';

const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a new star with random coordinates
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      const newStar = { x, y };

      setStars(prevStars => [...prevStars, newStar]);
    }, 250); // Add a new star every second

    // Clear interval after 20 seconds
    setTimeout(() => {
      clearInterval(interval);
    }, 20000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      // style={{
      //   position: 'fixed',
      //   top: 0,
      //   left: 0,
      //   width: '100%',
      //   height: '100%',
      //   background: 'black',
      // }}
    >
      {stars.map((star, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: star.y,
            left: star.x,
            width: '1px',
            height: '1px',
            background: 'white',
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;