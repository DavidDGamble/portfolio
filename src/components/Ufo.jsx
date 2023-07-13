import React, { useState, useEffect } from "react";
import UfoImg from "../images/ufo.png";
import UfoGif from "../images/ufo.gif";

const Ufo = () => {
  const [position, setPosition] = useState(-800);
  const [position2, setPosition2] = useState(800);

  useEffect(() => {
    const interval = setInterval(() => {
      if (position === 403) {
        clearInterval(interval);
        setPosition2((prevPosition) => prevPosition - 3);
      } else if (position < 403) {
        setPosition((prevPosition) => prevPosition + 3);
      } else if (position > 1600) {
        clearInterval(interval);
      } else {
        setPosition((prevPosition) => prevPosition + 15);
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [position]);

  useEffect(() => {
    if (position2 !== 800) {
      const interval = setInterval(() => {
        if (position2 === 530) {
          clearInterval(interval);
          setTimeout(() => {
            setPosition(404);
          }, 500);
        } else {
          setPosition2((prevPosition) => prevPosition - 1);
        }
      }, 10);

      return () => {
        clearInterval(interval);
      };
    } else {
      return;
    }
  }, [position2]);

  return (
    <div className="ufo">
      {position !== 403 ? (
        <img
          src={UfoImg}
          alt="ufo"
          style={{
            position: "absolute",
            top: "475px",
            left: `${position}px`,
          }}
        />
      ) : (
        <img
          src={UfoGif}
          alt="ufo"
          style={{
            position: "absolute",
            top: "475px",
            left: `${position}px`,
          }}
        />
      )}
      <div>
        <h3
          style={{
            visibility: position === 403 ? "visible" : "hidden",
            position: "fixed",
            left: "360px",
            top: `${position2}px`,
          }}
        >
          Hire me! 🤘🏽👽🤙🏽
        </h3>
      </div>
    </div>
  );
};

export default Ufo;
