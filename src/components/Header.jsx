import React from "react";
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <Navbar>
        <div>
          <Nav className="me-auto">
            <Nav.Link className="linkContainer">
              <p className={props.home ? "link2" : "link"} 
                onClick={props.handleHome}>home</p>
            </Nav.Link>
            <Nav.Link className="linkContainer">
              <p className={props.resume ? "link2" : "link"}  
                onClick={props.handleResume}>resume</p>
            </Nav.Link>
            <Nav.Link className="linkContainer">
              <p className={props.projects ? "link2" : "link"}  
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
