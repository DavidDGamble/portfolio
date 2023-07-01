import React, { useState, useEffect } from "react";
import Collapse from "react-bootstrap/Collapse";
import UfoImg from "../images/ufo.png";
import UfoGif from "../images/ufo.gif";

const Ufo = () => {
  const [position, setPosition] = useState(-800);
  const [position2, setPosition2] = useState(-40);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (position === 403) {
        clearInterval(interval);
        setPosition2((prevPosition) => prevPosition + 3);
      } else if (position < 403) {
        setPosition((prevPosition) => prevPosition + 3);
      } else {
        setPosition((prevPosition) => prevPosition + 7);
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [position]);

  useEffect(() => {
    if (position2 !== -40) {
      const interval = setInterval(() => {
        if (position2 === 200) {
          clearInterval(interval);
          setIsOpen(false);
        } else {
          setPosition2((prevPosition) => prevPosition + 1);
        }
      }, 10);

      return () => {
        clearInterval(interval);
      };
    } else {
      return;
    }
  }, [position2]);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setPosition(404);
      }, 500);
    };
  }, [isOpen])

  return (
    <div>
      {position !== 403 ? (
        <img
          src={UfoImg}
          alt="ufo"
          style={{
            position: "absolute",
            bottom: `200px`,
            left: `${position}px`,
          }}
        />
      ) : (
        <img
          src={UfoGif}
          alt="ufo"
          style={{
            position: "absolute",
            bottom: "200px",
            left: `${position}px`,
          }}
        />
      )}
      <Collapse in={isOpen}>
        <div>
          <h3
            style={{
              position: "absolute",
              left: "360px",
              bottom: `${position2}px`,
            }}
          >
            Hire me! 🤘🏽👽🤙🏽
          </h3>
        </div>
      </Collapse>
    </div>
  );
};

export default Ufo;
