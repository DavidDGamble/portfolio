import React, { useState, useEffect } from 'react';
import UfoImg from "../images/ufo.png";
import UfoGif from "../images/ufo.gif";

const Ufo = () => {
  const [position, setPosition] = useState(-800);

  useEffect(() => {
    const interval = setInterval(() => {
      if (position === 403) {
        clearInterval(interval);
      } else {
        setPosition((prevPosition) => prevPosition + 3);
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [position]);

  return (
    <div>
      {position !== 403 ? 
        <img src={UfoImg} alt="ufo"
          style={{
            position: 'absolute',
            bottom: `200px`,
            left: `${position}px`,
          }}
        />
      :
        <img src={UfoGif} alt="ufo"
          style={{
            position: 'absolute',
            bottom: `200px`,
            left: `${position}px`,
          }}
        /> 
      }
    </div>

  );
};

export default Ufo;