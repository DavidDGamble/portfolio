import React, { useState } from 'react';
import Header from './Header';
import Home from './Home';
import Resume from './Resume';
import Projects from './Projects';
import '../styles/App.css';

const App = () => {
  const [home, setHome] = useState(true);
  const [resume, setResume] = useState(false);
  const [projects, setProjects] = useState(false);

  const handleHome = () => {
    setHome(true);
    setResume(false);
    setProjects(false);
  }
  const handleResume = () => {
    setHome(false);
    setResume(true);
    setProjects(false);
  }
  const handleProjects = () => {
    setHome(false);
    setResume(false);
    setProjects(true);
  }

  let curVisibleState = null;
  if (home) {
    curVisibleState = <Home />
  } else if (resume) {
    curVisibleState = <Resume />
  } else if (projects) {
    curVisibleState = <Projects />
  }

  return (
    <div className="App">
      <Header 
        handleHome = {handleHome} 
        handleResume = {handleResume}
        handleProjects = {handleProjects}
        home = {home}
        resume = {resume}
        projects = {projects}
      />
      {curVisibleState}
    </div>
  );
}

export default App;