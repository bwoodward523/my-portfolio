import React from "react";
import ycpprojects from '../objects/personalprojects';
import '../pages/Project1.css'

function DirtyBox() {
    const project = ycpprojects.find(p => p.id === 4);
    return(
        <div>
            <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-start p-10">
                <h1 className="text-4xl font-bold text-black">{project?.title || "DirtyBox"}</h1>
                <p className="text-center mt-4 text-xl text-gray-800 pb-8">
                    {project?.description || "A project created for YCPHacks using Raspberry Pi Zero 2w."}
                </p>
                <div className="text-center mb-8">
                    <p className="text-3xl sm:text-5xl font-bold text-gray-600 mb-4">Under Construction</p>
                    <p className="text-xl sm:text-2xl text-gray-500 mb-8">This page is currently being developed. Please check back soon!</p>
                </div>
                <div className="text-center">
                    <p className="text-lg sm:text-xl text-gray-800">
                        Here is a{' '}
                        <a 
                            href="https://www.linkedin.com/posts/brandon-woodward-9a6468264_over-the-weekend-of-november-2nd-i-had-the-activity-7262188939971551232-JwnO/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDaEY4B7370PeAtPibAg_lTAONE231DZH0" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline"
                        >
                            link to the LinkedIn post about this project
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}
export default DirtyBox;

