import React, { useEffect, useState } from "react";

const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      const newStar = { x, y };

      setStars((prevStars) => [...prevStars, newStar]);
    }, 250);

    setTimeout(() => {
      clearInterval(interval);
    }, 20000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {stars.map((star, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: star.y,
            left: star.x,
            width: "1px",
            height: "1px",
            background: "white",
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
