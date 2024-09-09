import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import {useState} from 'react';

function App() {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <Router>
      <div>
         <div className={`outer-container p-4 bg-gray-800 text-white flex justify-between items-center transition-max-height duration-1000 ${navVisible ? 'max-h-40' : 'max-h-0'}`}>
          <h1 className="text-lg font-bold duration-200 hover:scale-110">Brandon Woodward</h1>

          <nav className={`bg-gray-800 text-white p-4 transition duration-500 flex-grow ${navVisible ? 'expanded' : 'collapsed'}`}>
          <ul className="flex justify-center space-x-32">
            <li className="transition-transform duration-300 transform hover:scale-150">
              <Link to="/" className="transition duration-300 hover:text-blue-600">Home</Link>
            </li>
            <li className="transition-transform duration-300 transform hover:scale-150">
              <Link to="/robotgame" className="transition duration-300 hover:text-blue-600">RobotGame</Link>
            </li>
            <li className="transition-transform duration-300 transform hover:scale-150">
              <Link to="/project2" className="transition duration-300 hover:text-blue-600">Project 2</Link>
            </li>
            <li className="transition-transform duration-300 transform hover:scale-150">
              <Link to="/project3" className="transition duration-300 hover:text-blue-600">Project 3</Link>
            </li>
            
          </ul>
        </nav>
       {/* Hamburger icon */}
          <button
            onClick={toggleNav}
            className="text-3xl focus:outline-none duration-200 hover:scale-x-125 hover:scale-y-150"
            aria-label="Toggle Menu"
           // onMouseEnter={'transition-transform hover:scale-y-150'}
          >
            &#9776; {/* This is the triple-line (hamburger) icon */}
          </button>
        </div>
  
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/robotgame" element={<Project1 />} />
            <Route path="/project2" element={<Project2 />} />
            <Route path="/project3" element={<Project3 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
