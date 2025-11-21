import React from "react";
import projects from '../objects/ycpprojects';
import '../pages/Project1.css'

function MazeAlgorithm() {
    const project = projects.find(p => p.id === 3);
    return(
        <div>
            <div className="bg-gray-100 h-auto flex flex-col items-center justify-start p-7 sm:p10">
                <h1 className="text-4xl font-bold text-black">{project?.title || "MazeAlgorithm Visualization OpenGL"}</h1>
                <p className="text-center mt-4 text-xl text-gray-800 pb-8">
                    [Description to be added]
                </p>
                <a href="https://www.youtube.com/watch?v=1SJbIdNnsfM" target="_blank" rel="noopener noreferrer" className="text-center inline-block px-6 pb-3 py-3 mt-4 text-lg font-bold text-white bg-red-600 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-red-700">
                    See a tour of the project on YouTube!
                    <img src="https://img.youtube.com/vi/1SJbIdNnsfM/maxresdefault.jpg" alt="MazeAlgorithm Video Thumbnail" className="w-full" />
                </a>
            </div>
          
            <p className="bg-gray-400 text-center pt-20 text-5xl font-bold text-white">Role & Goal</p>
            <div className="flex flex-col sm:flex-row text-center w-screen">
                <div className="bg-gray-400 p-4 sm:p-10 text-2xl sm:text-3xl font-bold flex justify-center text-white flex-1 w-full sm:w-1/2">
                    {project?.role || "[Role to be added]"}
                </div>
                <div className="bg-gray-400 p-4 sm:p-10 text-2xl sm:text-3xl font-bold flex justify-center text-white flex-1 w-full sm:w-1/2">
                    {project?.goal || "[Goal to be added]"}
                </div>
            </div>
        </div>
    );
}
export default MazeAlgorithm;

