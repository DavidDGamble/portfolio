import React from "react";
import PropTypes from 'prop-types'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <Navbar>
        <div>
          <Nav className="me-auto">
            <Nav.Link className="button-container">
              <p className={props.home ? "button2" : "button"} 
                onClick={props.handleHome}>home</p>
            </Nav.Link>
            <Nav.Link className="button-container">
              <p className={props.resume ? "button2" : "button"}  
                onClick={props.handleResume}>resume</p>
            </Nav.Link>
            <Nav.Link className="button-container">
              <p className={props.projects ? "button2" : "button"}  
                onClick={props.handleProjects}>projects</p>
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}

Header.propTypes = {
  handleHome: PropTypes.func,
  handleResume: PropTypes.func,
  handleProjects: PropTypes.func,
  home: PropTypes.bool,
  resume: PropTypes.bool,
  projects: PropTypes.bool,
}

export default Header;
