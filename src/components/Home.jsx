import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Me from "../images/me.JPG";
import Rocket from "./Rocket";
import Ufo from "./Ufo";
import StarBackground from "./StarBackground";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome!</h1>
      <Row style={{ marginTop: "2rem" }}>
        <Col md={5}>
          <img className="photo" src={Me} alt="David Gamble" />
        </Col>
        <Col md={7}>
          <p className="about">
            My name is David Gamble, I am based in Portland, OR and a self
            driven junior developer transitioning from a 10 year career in
            woodworking/carpentry.  I am excited to bring my problem solving and
            resourcefulness to the software development industry.  I love
            creating beautiful and function pieces for others to enjoy.
          </p>
        </Col>
      </Row>
      <Rocket />
      <Ufo />
      <StarBackground />
    </div>
  );
};

export default Home;
