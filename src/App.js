import React from 'react'
import './App.css';
import Contact from './components/Contact';
import Intro from './components/Intro';
import OtherProjects from './components/OtherProjects';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import Work from './components/Work';

import { Element } from 'react-scroll'
import Nav from './components/Nav';



function App() {
  // toggle state defines if the nav-icon button is clicked or not 
  
  return (
    <div className="App">
      <Nav />
      <Element id='INTRO'><Intro/></Element>
      <Element id = 'WORK' ><Work/></Element>
      <Element id ='PROJECTS'><Projects /></Element>
      <OtherProjects/>
      <Element id ='CONTACT'><Contact /></Element>
      <Sidebar/>
    </div>
  );
}

export default App;
