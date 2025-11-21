import React from "react";
import ycpprojects from '../objects/ycpprojects';
import '../pages/Project1.css'

function RevMetrixCapstone() {
    const project = ycpprojects.find(p => p.id === 5);
    return(
        <div>
            <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-10">
                <h1 className="text-4xl font-bold text-center text-black mb-8">{project?.title || "RevMetrix: Capstone"}</h1>
                <div className="text-center">
                    <p className="text-3xl sm:text-5xl font-bold text-gray-600 mb-4">Under Construction</p>
                    <p className="text-xl sm:text-2xl text-gray-500">This page is currently being developed. Please check back soon!</p>
                </div>
            </div>
        </div>
    );
}
export default RevMetrixCapstone;

