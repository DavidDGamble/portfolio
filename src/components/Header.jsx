import React from "react";
import PropTypes from "prop-types";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Gmail from "../images/gmail.png";
import LinkedIn from "../images/linkedin.png";
import GitHub from "../images/github.png";
import "../styles/Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <Navbar>
        <Nav className="me-auto">
          <Nav.Link className="button-container">
            <p
              className={props.home ? "button2" : "button"}
              onClick={props.handleHome}
            >
              home
            </p>
          </Nav.Link>
          <Nav.Link className="button-container">
            <p
              className={props.resume ? "button2" : "button"}
              onClick={props.handleResume}
            >
              resume
            </p>
          </Nav.Link>
          <Nav.Link className="button-container">
            <p
              className={props.projects ? "button2" : "button"}
              onClick={props.handleProjects}
            >
              projects
            </p>
          </Nav.Link>
        </Nav>
        <a
          href="mailto:DavidDGamble@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img className="gmail" src={Gmail} alt="gmail icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/DavidDeanGamble"
          target="_blank"
          rel="noreferrer"
        >
          <img className="linkedin" src={LinkedIn} alt="linkedin icon" />
        </a>
        <a
          href="https://github.com/DavidDGamble"
          target="_blank"
          rel="noreferrer"
        >
          <img className="github" src={GitHub} alt="github icon" />
        </a>
      </Navbar>
    </div>
  );
};

Header.propTypes = {
  handleHome: PropTypes.func,
  handleResume: PropTypes.func,
  handleProjects: PropTypes.func,
  home: PropTypes.bool,
  resume: PropTypes.bool,
  projects: PropTypes.bool,
};

export default Header;
