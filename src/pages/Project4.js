import React from "react";
import projects from '../objects/projects';
import '../pages/Project1.css'

function Project4() {
    return(
        <div>
            <div className="bg-[#ad2f45] min-h-screen flex flex-col items-center justify-start p-10">
                <h1 className="text-4xl font-bold text-white">{projects[3].title}</h1>
                <p className="text-center mt-4 text-gray-400" >{projects[3].description}</p>
                <iframe title="sporo" frameborder="0" src={`${process.env.PUBLIC_URL}/sporo/index.html`} allowfullscreen="" width="960" height="660" >
            
                </iframe>
            </div>
            <p className="bg-gray-400 text-center pt-20 text-5xl font-bold text-white">Role & Goal</p>
            <div className="flex flex-row">
                <div className="bg-gray-400 p-20 text-3xl font-bold flex justify-center text-white">
                    {projects[3].role}
                </div>
                <div className="bg-gray-400 p-20 text-3xl font-bold flex justify-center text-white">
                    {projects[3].goal}
                </div>
            </div>
            <div className="p-20 text-5xl font-bold bg-gray-900 text-white flex flex-col">
                <p className="text-center pb-5">{projects[3].placement}</p>
                <a href={projects[3].itchio}  target="_blank" rel="noopener noreferrer" className="text-center bg-blue-500 hover:bg-blue-900 duration-200 px-16 py-4 transform hover:scale-105">Project Submission Page</a>
            
            </div>
            
        </div>
    );
}
export default Project4;