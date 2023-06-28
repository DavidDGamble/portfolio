import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import GeTogether from "../images/Getogether_Screenshot.png"
import "../styles/Projects.css";

const Projects = () => {
  const [openDiv1, setOpenDiv1] = useState(false);
  const [openDiv2, setOpenDiv2] = useState(false);

  const handleButtonClick = (divNumber) => {
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
  };

  return (
    <div className="projects">
      <h1>Projects</h1>
      <Row>
        <Col>
          <div className="selections">
            <p className="link" onClick={() => handleButtonClick(1)}>GeTogether</p>
            <p className="link" onClick={() => handleButtonClick(2)}>Button 2</p>
          </div>
        </Col>
        <Col>
          <Collapse in={openDiv1}>
            <div>
              <Card>
                <Card.Img variant="top" src={GeTogether} />
                <Card.Body>
                  <Card.Title>GeTogether</Card.Title>
                  <Card.Text>
                    GeTogether is a robust web application built with Remix and Typescript while utilizing Postgres as the database management system. The app facilitates the creation and management of potluck style events, allowing users to organize and coordinate gatherings seamlessly. In addition to its powerful event management capabilities, the app employs Socket.io, a real-time communication library, to enable live communication between users associated with the events, fostering interactive and engaging experiences. With its combination of Typescript, Postgres, and Socket.io, GeTogether provides a reliable and dynamic platform for users to plan and participate in potluck events.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </Collapse>
          <Collapse in={openDiv2}>
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
