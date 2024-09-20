import React from "react";
import projects from '../objects/projects';
import '../pages/Project1.css'

//Robot who baked the world
function Project2() {
    return(
        <div>
            <div className="bg-green-800 min-h-screen flex flex-col items-center justify-start p-10">
                <h1 className="text-4xl font-bold text-white">{projects[1].title}</h1>
                <p className="mt-4 text-gray-400" >{projects[1].description}</p>
                <iframe title="robot" frameborder="0" src={`${process.env.PUBLIC_URL}/peacetothemeadow/index.html`} allowfullscreen="" width="960" height="660" >
            
                </iframe>
            </div>
            <p className="bg-gray-400 text-center pt-20 text-5xl font-bold text-white">Role & Goal</p>
            <div className="flex flex-row">
                <div className="bg-gray-400 p-20 text-3xl font-bold flex justify-center text-white">
                    {projects[1].role}
                </div>
                <div className="bg-gray-400 p-20 text-3xl font-bold flex justify-center text-white">
                    {projects[1].goal}
                </div>
            </div>
            <div className="p-20 text-5xl font-bold bg-gray-900 text-white flex flex-col">
                <p className="text-center pb-5">{projects[1].placement}</p>
                <a href={projects[1].itchio}  target="_blank" rel="noopener noreferrer" className="text-center bg-green-800 hover:bg-green-900 duration-200 px-16 py-4 transform hover:scale-105">Project Submission Page</a>
            
            </div>
            
        </div>
        
    );
}
export default Project2;