import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink, } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import WorkExperience from './pages/Work';
import RevMetrix from './pages/RevMetrix';
import House from './pages/House';
import Kratz from './pages/Kratz';
import Project4 from './pages/Project4';
import RiotGamesCoverLetter from './pages/RiotGamesCoverLetter';
//import Project3 from './pages/Project3';

function App() {

  return (
    <Router>
     
      <div>
         <div className={`p-4 w-screen bg-gray-800 text-white flex flex-grow justify-between items-center transition-max-height duration-1000`}>
         
          <nav className={`w-screen bg-gray-800 text-white p-4 transition duration-500 flex-grow `}>
          <ul className="flex justify-center space-x-10 md:space-x-16 lg:space-x-32">
            <li className="transition-transform duration-300 transform hover:scale-150">
              <NavLink to="/" className={({ isActive }) => 
                    `transition duration-300 hover:text-blue-600 ${isActive ? 'text-blue-600 underline' : ''}`}>About</NavLink>
            </li>
            <li className="transition-transform duration-300 transform hover:scale-150">
              <NavLink to="/projects" className={({ isActive }) => 
                    `transition duration-300 hover:text-blue-600 ${isActive ? 'text-blue-600 underline' : ''}`}>Projects</NavLink>
            </li>
            <li className="transition-transform duration-300 transform hover:scale-150">
              <NavLink to="/work" className={({ isActive }) => 
                    `transition duration-300 hover:text-blue-600 ${isActive ? 'text-blue-600 underline' : ''}`}>Work Experience</NavLink>
            </li>
           
            
            
          </ul>
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
            <Route path="/work" element={<WorkExperience />} />
            <Route path="/revmetrix" element={<RevMetrix />} />
            <Route path="/riotgamescoverletter" element={<RiotGamesCoverLetter />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
