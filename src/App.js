import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import BackButton from './components/BackButton';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import FiraxisWork from './pages/FiraxisWork';
import RevMetrix from './pages/RevMetrix';
import House from './pages/House';
import Kratz from './pages/Kratz';
import Project4 from './pages/Project4';
import Work from './pages/Work';
import Blug from './pages/Blug';
import CorneaCarnage from './pages/CorneaCarnage';
//import Project3 from './pages/Project3';
import JCIWork from './pages/JCIWork';
import CourtsideWork from './pages/CourtsideWork';
import DirtyBox from './pages/DirtyBox';
import RevMetrixCapstone from './pages/RevMetrixCapstone';
import RobotsInRealm from './pages/RobotsInRealm';
import MazeAlgorithm from './pages/MazeAlgorithm';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <div>
         <div className={`p-4 w-screen bg-gray-800 text-white flex flex-grow justify-between items-center transition-max-height duration-1000`}>
         
          <nav className={`w-screen bg-gray-800 text-white p-4 transition duration-500 flex-grow flex items-center`}>
          <div className="flex-1 flex items-center">
            <BackButton />
          </div>
          <ul className="flex justify-center space-x-10 md:space-x-16 lg:space-x-32 flex-1">

          </ul>
          <div className="flex-1"></div>
        </nav>
        </div>
  
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/robotgame" element={<Project1 />} />
            <Route path="/peacetothemeadow" element={<Project2 />} />
            <Route path="/slimegame" element={<Project3 />} />
            <Route path="/sporo" element={<Project4 />} />
            <Route path="/kratz" element={<Kratz />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/house" element = {<House/>}/>
            <Route path="/firaxiswork" element={<FiraxisWork />} />
            <Route path="/revmetrix" element={<RevMetrix />} />
            <Route path="/work" element={<Work/>}/>
            <Route path="/blug" element={<Blug />} />
            <Route path="/corneacarnage" element={<CorneaCarnage />} />
            <Route path="/jciwork" element={<JCIWork />} />
            <Route path="/courtsidework" element={<CourtsideWork />} />
            <Route path="/dirtybox" element={<DirtyBox />} />
            <Route path="/revmetrix-capstone" element={<RevMetrixCapstone />} />
            <Route path="/robots-in-realm" element={<RobotsInRealm />} />
            <Route path="/maze-algorithm" element={<MazeAlgorithm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
