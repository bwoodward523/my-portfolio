import React from "react";
import projects from '../objects/projects';
import '../pages/Project1.css'

function Blug() {
    const project = projects.find(p => p.id === 5);
    return(
        <div>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-10">
                <h1 className="text-4xl font-bold text-center text-blue-600">{project?.title || "Blug"}</h1>
                <p className="text-center mt-4 text-gray-400">{project?.description || "[Description to be added]"}</p>
                <iframe title="blug" className="responsive-iframe" frameBorder="0" src={`${process.env.PUBLIC_URL}/Blug/index.html`} allowFullScreen>
                </iframe>
                <div className="sm:hidden pt-48 text-xl font-bold text-center text-blue-600">This website features an embedded version of this game which is only available on a personal computer.</div>
            </div>
            <p className="bg-gray-400 text-center pt-20 text-5xl font-bold text-white">Role & Goal</p>
            <div className="flex flex-col sm:flex-row text-center">
                <div className="bg-gray-400 p-4 sm:p-10 text-2xl sm:text-3xl font-bold flex justify-center text-white">
                    {project?.role || "[Role to be added]"}
                </div>
                <div className="bg-gray-400 p-4 sm:p-10 text-2xl sm:text-3xl font-bold flex justify-center text-white">
                    {project?.goal || "[Goal to be added]"}
                </div>
            </div>
            <div className="p-20 text-5xl font-bold bg-gray-900 text-white flex flex-col">
                <p className="text-center text-2xl sm:text-5xl pb-5">{project?.placement || "[Placement to be added]"}</p>
                {project?.itchio && (
                    <a href={project.itchio} target="_blank" rel="noopener noreferrer" className="text-center text-xs sm:text-5xl bg-blue-500 hover:bg-blue-900 duration-200 px-16 py-4 transform hover:scale-105">Project Submission Page</a>
                )}
            </div>
        </div>
    );
}
export default Blug;

