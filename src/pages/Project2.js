import React from "react";
import projects from '../objects/projects';
import '../pages/Project1.css'

//PTM
function Project2() {
    return(
        <div>
            <div className="bg-green-800 min-h-screen flex flex-col items-center justify-start p-10">
                <h1 className="text-4xl font-bold text-white">{projects[1].title}</h1>
                <p className="text-center mt-4 text-gray-400" >{projects[1].description}</p>
                <iframe title="robot" class="responsive-iframe" frameborder="0" src={`${process.env.PUBLIC_URL}/peacetothemeadow/index.html`} allowfullscreen="" >
            
                </iframe>
                <div className="sm:hidden pt-48 text-xl font-bold text-center text-white">This website features an embedded version of this game which is only available on a personal computer.</div>

            </div>
            <p className="bg-gray-400 text-center pt-20 text-5xl font-bold text-white">Role & Goal</p>
            <div className="flex flex-col sm:flex-row text-center">
                <div className="bg-gray-400 p-4 sm:p-10 text-2xl sm:text-3xl font-bold flex justify-center text-white">
                    {projects[1].role}
                </div>
                <div className="bg-gray-400 p-4 sm:p-10 text-2xl sm:text-3xl font-bold flex justify-center text-white">
                    {projects[1].goal}
                </div>
            </div>
            <div className="p-20 text-5xl font-bold bg-gray-900 text-white flex flex-col">
                <p className="text-center text-2xl sm:text-5xl pb-5">{projects[1].placement}</p>
                <a href={projects[1].itchio}  target="_blank" rel="noopener noreferrer" className="text-center text-xs sm:text-5xl  bg-green-800 hover:bg-green-900 duration-200 px-16 py-4 transform hover:scale-105">Project Submission Page</a>
            
            </div>
            
        </div>
        
    );
}
export default Project2;