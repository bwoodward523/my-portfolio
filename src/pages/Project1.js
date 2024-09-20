import React from "react";
import projects from '../objects/projects';
import '../pages/Project1.css'

//Robot who baked the world
function Project1() {
    return(
        <div>
            <div className="robotbg min-h-screen bg-gray-100 flex flex-col items-center justify-start p-10">
                <h1 className="text-4xl font-bold text-blue-600">{projects[0].title}</h1>
                <p className="text-center mt-4 text-gray-400" >{projects[0].description}</p>
                <iframe title="robot" frameborder="0" src={`${process.env.PUBLIC_URL}/robotgame/index.html`} allowfullscreen="" width="960" height="660" >
            
                </iframe>
            </div>
            <p className="bg-gray-400 text-center pt-20 text-5xl font-bold text-white">Role & Goal</p>
            <div className="flex flex-row">
                <div className="bg-gray-400 p-20 text-3xl font-bold flex justify-center text-white">
                    {projects[0].role}
                </div>
                <div className="bg-gray-400 p-20 text-3xl font-bold flex justify-center text-white">
                    {projects[0].goal}
                </div>
            </div>
            <div className="p-20 text-5xl font-bold bg-gray-900 text-white flex flex-col">
                <p className="text-center pb-5">{projects[0].placement}</p>
                <a href={projects[0].itchio}  target="_blank" rel="noopener noreferrer" className="text-center bg-blue-500 hover:bg-blue-900 duration-200 px-16 py-4 transform hover:scale-105">Project Submission Page</a>
            
            </div>
            
        </div>
        
    );
}
export default Project1;