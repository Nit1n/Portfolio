
import './App.css';
import Contact from './components/Contact';
import Intro from './components/Intro';
import OtherProjects from './components/OtherProjects';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <Intro />
      <Work />
      <Projects />
      <OtherProjects />
      <Contact />
      <Sidebar/>
    </div>
  );
}

export default App;
