import React, { useState, useEffect } from "react";
import img1 from "../images/dopefit2.jpg";
import resume from "./WoodwardResumeSpr2025.pdf";
import work from '../objects/work';
import projects from '../objects/projects';
import ycpprojects from '../objects/ycpprojects';
import personalprojects from '../objects/personalprojects';
import ProjectSummary from '../components/ProjectSummary';
import ScrollPositionTracker from '../components/ScrollPositionTracker';
import GodotIcon from '../images/godotlogo.png';
import YCPIcon from '../images/ycpicon.png';
import dopefitcover from '../images/dopefit2.jpg';

function Home(){
    // Initialize state from sessionStorage if available
    const getSavedState = (key, defaultValue) => {
        const saved = sessionStorage.getItem(`homeExpandedState_${key}`);
        return saved !== null ? JSON.parse(saved) : defaultValue;
    };

    const [workExpanded, setWorkExpanded] = useState(() => getSavedState('work', false));
    const [projectsExpanded, setProjectsExpanded] = useState(() => getSavedState('projects', false));
    const [ycpExpanded, setYcpExpanded] = useState(() => getSavedState('ycp', false));
    const [personalExpanded, setPersonalExpanded] = useState(() => getSavedState('personal', false));
    const [godotExpanded, setGodotExpanded] = useState(() => getSavedState('godot', false));

    // Save state to sessionStorage whenever any expandable state changes
    useEffect(() => {
        sessionStorage.setItem('homeExpandedState_work', JSON.stringify(workExpanded));
        sessionStorage.setItem('homeExpandedState_projects', JSON.stringify(projectsExpanded));
        sessionStorage.setItem('homeExpandedState_ycp', JSON.stringify(ycpExpanded));
        sessionStorage.setItem('homeExpandedState_personal', JSON.stringify(personalExpanded));
        sessionStorage.setItem('homeExpandedState_godot', JSON.stringify(godotExpanded));
    }, [workExpanded, projectsExpanded, ycpExpanded, personalExpanded, godotExpanded]);

    return(  
    <div className="flex flex-col flex-grow bg-no-repeat  bg-cover to-indigo-500 ">
      <ScrollPositionTracker />        

     
      <div className="flex flex-col justify-center items-center">
      <img className=" pt-10 block ml-auto mr-auto w-64 h-128" src={img1} alt="Brandon Woodward"></img>
        <div className="">
          <h1 className="relative text-center pt-20 text-5xl font-bold mb-6">Brandon Woodward</h1>
          <h2 className="relative text-center pb-20 text-4xl font-bold">Software Engineer</h2>
        </div>
      </div>
    
      <div className="bg-gray-900 p-10 sm:p-20 text-3xl md:text-5xl font-bold flex justify-center text-white md:px-24 lg:px-52 text-center">
        A senior at York College of Pennsylvania focused on creating imaginative, cutting-edge software, expanding my programming skills, and eager to work alongside knowledgeable team members. 
      </div>

      {/* Work Experience Section */}
      <div className="bg-gray-100"> 
        <div 
          className="md:mx-26 lg:mx-52 p-8 cursor-pointer hover:bg-gray-200 transition-colors duration-200"
          onClick={() => setWorkExpanded(!workExpanded)}
        >
          
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-500">Work Experience <span className="text-xl text-gray-500">(Click to expand)</span></h2>
            <span className="text-2xl text-gray-500">
              {workExpanded ? '−' : '+'}
            </span>
          </div>
        </div>
        <div className={`md:mx-26 lg:mx-52 px-8 pb-8 overflow-hidden transition-all duration-500 ease-in-out ${
          workExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
           <p className="text-xl text-gray-500 mb-2">(Click the items! They have their own pages!)</p>
          {work.map(workItem => (
            <ProjectSummary
              key={workItem.id}
              title={workItem.title}
              description={workItem.smalldesc}
              image={workItem.image}
              link={workItem.link}
              submissiondate={workItem.date}
            />
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-gray-100">
        <div 
          className="md:mx-26 lg:mx-52 p-8 cursor-pointer hover:bg-gray-200 transition-colors duration-200"
          onClick={() => setProjectsExpanded(!projectsExpanded)} 
        > 
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-500">Projects <span className="text-xl text-gray-500">(Click to expand)</span></h2>
            <span className="text-2xl text-gray-500">
              {projectsExpanded ? '−' : '+'}
            </span>
          </div>
        </div>
        <div className={`md:mx-26 lg:mx-52 px-8 pb-8 overflow-hidden transition-all duration-500 ease-in-out ${
          projectsExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <p className="text-xl text-gray-500 mb-2">(Click the items! They have their own pages!)</p>
          {/* YCP Projects */}
          <div 
            className="mt-4 cursor-pointer hover:bg-gray-200 transition-colors duration-200 rounded p-4"
            onClick={() => setYcpExpanded(!ycpExpanded)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <h3 className="text-2xl font-bold text-gray-600">YCP Projects</h3>
                <img className="ml-4" src={YCPIcon} alt="York College of Pennsylvania" width="112px"></img>
              </div>
              <span className="text-xl text-gray-500">
                {ycpExpanded ? '−' : '+'}
              </span>
            </div>
          </div>
          <div className={`pl-4 pb-4 overflow-hidden transition-all duration-500 ease-in-out ${
            ycpExpanded ? 'max-h-[2500px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            {ycpprojects.map(project => (
              <ProjectSummary
                key={project.id}
                title={project.title}
                description={project.smalldesc}
                image={project.image}
                link={project.link}
                submissiondate={project.date}
              />
            ))}
          </div>

          {/* Personal Projects */}
          <div 
            className="mt-4 cursor-pointer hover:bg-gray-200 transition-colors duration-200 rounded p-4"
            onClick={() => setPersonalExpanded(!personalExpanded)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <h3 className="text-2xl font-bold text-gray-600">Personal Projects</h3>
                <img className="ml-4 w-20 h-24 object-fill" src={dopefitcover} alt="Dopefit2"></img>
              </div>
              <span className="text-xl text-gray-500">
                {personalExpanded ? '−' : '+'}
              </span>
            </div>
          </div>
          <div className={`pl-4 pb-4 overflow-hidden transition-all duration-500 ease-in-out ${
            personalExpanded ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            {personalprojects.map(project => (
              <ProjectSummary
                key={project.id}
                title={project.title}
                description={project.smalldesc}
                image={project.image}
                link={project.link}
                submissiondate={project.date || project.submissiondate}
              />
            ))}
          </div>

          {/* Godot Game Jams */}
          <div 
            className="mt-4 cursor-pointer hover:bg-gray-200 transition-colors duration-200 rounded p-4"
            onClick={() => setGodotExpanded(!godotExpanded)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-600">Godot Game Jams</h3>
                  <p className="text-sm sm:text-xl font-normal text-gray-500">Reference Itch.io pages to see credited developers</p>
                </div>
                <img className="ml-4 w-[100px] h-[100px]" src={GodotIcon} alt="Godot icon"></img>
              </div>
              <span className="text-xl text-gray-500">
                {godotExpanded ? '−' : '+'}
              </span>
            </div>
          </div>
          <div className={`pl-4 pb-4 overflow-hidden transition-all duration-500 ease-in-out ${
            godotExpanded ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            {projects.map(project => (
              <ProjectSummary
                key={project.id}
                title={project.title}
                description={project.smalldesc}
                image={project.image}
                link={project.link}
                submissiondate={project.submissiondate}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-gray-400 pt-10 sm:pt-20 p-20 sm:p-20 font-bold text-white">
        <h1 className="text-center text-5xl">Get in Touch</h1><br></br>
        <div className="flex sm:py-3 flex-col space-y-4 md:space-y-0 lg:space-y-0 md:flex-row lg:flex-row justify-between md:justify-center md:space-x-5  lg:space-x-20 lg:justify-center text-white  text-3xl ">
          <a href="https://github.com/bwoodward523" className="bg-blue-500 hover:bg-blue-900 duration-200 text-center p-8 transform hover:scale-105 sm:w-64">GitHub</a>
          <a href={resume} className="bg-blue-500 hover:bg-blue-900  duration-200 text-center p-8 transform hover:scale-105 sm:w-64">Resume</a>
          <a href="https://www.linkedin.com/in/brandon-woodward-9a6468264/" className="bg-blue-500 hover:bg-blue-900 duration-200 text-center p-8 transform hover:scale-105 sm:w-64">LinkedIn</a>
          <a href="https://ycp.joinhandshake.com/profiles/50329402" className="bg-blue-500 hover:bg-blue-900 duration-200 text-center p-8 transform hover:scale-105 sm:w-64">Handshake</a>
        </div>
        <div className="flex flex-col flex-grow justify-center bg-gray-400 text-white pt-10">
          <ul >
            <li className="text-center text-2xl pb-4">443-862-7644 </li>
            <li className="text-center text-2xl pb-4 "><a className="transition hover:text-blue-600 duration-400"href= "mailto: brandon790523@gmail.com">brandon790523@gmail.com</a></li>
          </ul>  
        </div>
      </div>
    </div>
    );
}
export default Home;