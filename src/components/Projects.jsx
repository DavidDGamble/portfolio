import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../styles/Projects.css";

const Projects = () => {
  const [curDiv, setCurDiv] = useState(null);
  const [openDiv1, setOpenDiv1] = useState(false);
  const [openDiv2, setOpenDiv2] = useState(false);

  const handleButtonClick = (divNumber) => {
    if (!curDiv & curDiv !== divNumber) {
      setCurDiv(divNumber);
      switch (divNumber) {
        case 1:
          setOpenDiv1(!openDiv1);
          setOpenDiv2(false);
          break;
        case 2:
          setOpenDiv2(!openDiv2);
          setOpenDiv1(false);
          break;
        default:
          break;
      }
    } else if (curDiv === divNumber) {
      setOpenDiv1(false);
      setOpenDiv2(false);
      setCurDiv(null);
    } else {
      setOpenDiv1(false);
      setOpenDiv2(false);
    }
  };

  const handleDiv1Exited = () => {
    switch (curDiv) {
      case 1:
        setOpenDiv1(!openDiv1);
        break;
      case 2:
        setOpenDiv2(!openDiv2);
        break;
      default:
        break;
    }
  }

  return (
    <div className="projects">
      <h1>Projects</h1>
      <Row>
        <Col>
          <div className="selections">
            <p onClick={() => handleButtonClick(1)}>Button 1</p>
            <p onClick={() => handleButtonClick(2)}>Button 2</p>
          </div>
        </Col>
        <Col>
          <Collapse in={openDiv1} onExited={handleDiv1Exited}>
            <div>
              <Card.Body style={{ width: "400px" }}>
                Project 1 Anim pariatur cliche reprehenderit, enim eiusmod high
                life accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </Card.Body>
            </div>
          </Collapse>
          <Collapse in={openDiv2} onExited={handleDiv1Exited}>
            <div>
              <Card.Body style={{ width: "400px" }}>
                Project 2 Anim pariatur cliche reprehenderit, enim eiusmod high
                life accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </Card.Body>
            </div>
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};

export default Projects;