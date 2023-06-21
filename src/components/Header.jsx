import React from "react";
import PropTypes from 'prop-types'
import "../styles/Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="linkContainer">
        <p className={props.home ? "link2" : "link"} 
          onClick={props.handleHome}>home</p>
      </div>
      <div className="linkContainer">
        <p className={props.resume ? "link2" : "link"}  
          onClick={props.handleResume}>resume</p>
      </div>
      <div className="linkContainer">
        <p className={props.projects ? "link2" : "link"}  
          onClick={props.handleProjects}>projects</p>
      </div>
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
