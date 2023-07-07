import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import GeTogether from "../images/Getogether_Screenshot.png";
import SnailMail from "../images/Snailmail_Screenshot.png";
import SurveyCreator from "../images/SurveyCreator_Screenshot.png";
import UfoImg from "../images/ufo.png";
import UfoGif from "../images/ufo.gif";
import "../styles/Projects.css";

const Projects = () => {
  const [openDiv1, setOpenDiv1] = useState(false);
  const [openDiv2, setOpenDiv2] = useState(false);
  const [openDiv3, setOpenDiv3] = useState(false);
  const [playGif, setPlayGif] = useState(false);

  useEffect(() => {
    if (playGif) {
      setTimeout(function () {
        setPlayGif(false);
      }, 800);
    }
  }, [playGif]);

  const handleButtonClick = (divNumber) => {
    setPlayGif(true);
    switch (divNumber) {
      case 1:
        setOpenDiv1(!openDiv1);
        setOpenDiv2(false);
        setOpenDiv3(false);
        break;
      case 2:
        setOpenDiv1(false);
        setOpenDiv2(!openDiv2);
        setOpenDiv3(false);
        break;
      case 3:
        setOpenDiv1(false);
        setOpenDiv2(false);
        setOpenDiv3(!openDiv3);
        break;
      default:
        break;
    }
  };

  return (
    <div className="projects">
      <h1>Projects</h1>
      <Row>
        <Col md={3} style={{ paddingLeft: "12%" }}>
          <div className="selections">
            <p className="button" onClick={() => handleButtonClick(1)}>
              GeTogether
            </p>
            <p className="button" onClick={() => handleButtonClick(2)}>
              SnailMail
            </p>
            <p className="button" onClick={() => handleButtonClick(3)}>
              Survey Creator
            </p>
          </div>
        </Col>
        <Col md={9} style={{ paddingLeft: "15%" }}>
          <div className="ufo">
            <img src={playGif ? UfoGif : UfoImg} alt="ufo" />
          </div>
          <Collapse in={openDiv1}>
            <div>
              <Card
                style={{
                  border: 0,
                  width: "60%",
                  height: "auto",
                }}
              >
                <Card.Img
                  variant="top"
                  src={GeTogether}
                  alt="Screenshot of GeTogether"
                />
                <Card.Body style={{ backgroundColor: "#1d1d20" }}>
                  <Card.Title style={{ color: "white", fontWeight: "bold" }}>
                    GeTogether
                  </Card.Title>
                  <Card.Text style={{ color: "white" }}>
                    GeTogether is a robust web application and provides a
                    reliable and dynamic platform for users to plan and
                    participate in potluck events. This was created in 7 weeks
                    with my teammate during my EyeCue Lab internship using Remix
                    and TypeScript with Prisma and PostgreSQL for the backend,
                    hosted on Fly.io while using Material-UI for a component
                    library.
                  </Card.Text>
                  <div className="link-container">
                    <a
                      className="link"
                      href="https://getogether.fly.dev"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Site
                    </a>
                    <a
                      className="link"
                      href="https://github.com/DavidDGamble/GeTogether"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Collapse>
          <Collapse in={openDiv2}>
            <div>
              <Card
                style={{
                  border: 0,
                  width: "60%",
                  height: "auto",
                }}
              >
                <Card.Img
                  variant="top"
                  src={SnailMail}
                  alt="Screenshot of Snailmail"
                />
                <Card.Body style={{ backgroundColor: "#1d1d20" }}>
                  <Card.Title style={{ color: "white", fontWeight: "bold" }}>
                    SnailMail
                  </Card.Title>
                  <Card.Text style={{ color: "white" }}>
                    SnailMail is a web application where users can upload photos
                    and create real life snail mail postcards to send to friends
                    and family. This was my capstone project for Epicodus and
                    built in one week using React and Firestore, hosted using
                    Firebase, and using PostGrid for printing and mailing
                    postcards, and Strip for payments.
                  </Card.Text>
                  <div className="link-container">
                    <a
                      className="link"
                      href="https://www.snailmail.dev"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Site
                    </a>
                    <a
                      className="link"
                      href="https://github.com/DavidDGamble/SnailMail"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Collapse>
          <Collapse in={openDiv3}>
            <div>
              <Card
                style={{
                  border: 0,
                  width: "60%",
                  height: "auto",
                }}
              >
                <Card.Img
                  variant="top"
                  src={SurveyCreator}
                  alt="Screenshot of Survey Creator"
                />
                <Card.Body style={{ backgroundColor: "#1d1d20" }}>
                  <Card.Title style={{ color: "white", fontWeight: "bold" }}>
                    Survey Creator
                  </Card.Title>
                  <Card.Text style={{ color: "white" }}>
                    Survey Creator is a React web app using Firestore to
                    create/take surveys and view all the answers submited by
                    users. This was made with a classmate in Epicodus in a
                    couple days and hosted using Firebase.
                  </Card.Text>
                  <div className="link-container">
                    <a
                      className="link"
                      href="https://survey-creator-2ea8b.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Site
                    </a>
                    <a
                      className="link"
                      href="https://github.com/DavidDGamble/survey-creator"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
