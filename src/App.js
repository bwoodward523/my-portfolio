import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import WorkExperience from './pages/work';
//import Project3 from './pages/Project3';

function App() {
 
  return (
    <Router>
      <div>
         <div className={`outer-container p-4 bg-gray-800 text-white flex justify-between items-center transition-max-height duration-1000`}>
          <h1 className="text-lg font-bold duration-200 hover:scale-110">Brandon Woodward</h1>

          <nav className={`bg-gray-800 text-white p-4 transition duration-500 flex-grow `}>
          <ul className="flex justify-center space-x-32">
            <li className="transition-transform duration-300 transform hover:scale-150">
              <Link to="/" className="transition duration-300 hover:text-blue-600">About</Link>
            </li>
            <li className="transition-transform duration-300 transform hover:scale-150">
              <Link to="/projects" className="transition duration-300 hover:text-blue-600">Projects</Link>
            </li>
            <li className="transition-transform duration-300 transform hover:scale-150">
              <Link to="/work" className="transition duration-300 hover:text-blue-600">Work Experience</Link>
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
            <Route path="/projects" element={<Projects />} />
            <Route path="/work" element={<WorkExperience />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
