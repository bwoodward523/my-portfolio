import React from "react";
import personalprojects from '../objects/personalprojects';
import '../pages/Project1.css'

function RobotsInRealm() {
    const project = personalprojects.find(p => p.id === 2);
    return(
        <div>
            <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-start p-10">
                <h1 className="text-4xl font-bold text-center text-black mb-8">{project?.title || "Robots in Realm: Machine Learning"}</h1>
                <div className="flex flex-col items-center gap-6">
                    <a href="https://www.youtube.com/watch?v=lsaFr3EqMWU" target="_blank" rel="noopener noreferrer" className="text-center inline-block px-6 pb-3 py-3 mt-4 text-lg font-bold text-white bg-red-600 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-red-700">
                        See a tour of the training on YouTube!
                        <img src="https://img.youtube.com/vi/lsaFr3EqMWU/maxresdefault.jpg" alt="Robots in Realm Video Thumbnail" className="w-full" />
                    </a>
                    <a href="https://www.youtube.com/watch?v=0N-2py5A6SU" target="_blank" rel="noopener noreferrer" className="text-center inline-block px-6 pb-3 py-3 mt-4 text-lg font-bold text-white bg-red-600 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-red-700">
                        See a tour of the project on YouTube!
                        <img src="https://img.youtube.com/vi/0N-2py5A6SU/maxresdefault.jpg" alt="Robots in Realm Video Thumbnail" className="w-full" />
                    </a>
                    
                </div>
            </div>
        </div>
    );
}
export default RobotsInRealm;

