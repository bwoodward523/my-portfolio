import React from "react";
import ycpprojects from '../objects/ycpprojects';
import '../pages/Project1.css'

function DirtyBox() {
    const project = ycpprojects.find(p => p.id === 4);
    return(
        <div>
            <div className="bg-gray-100 h-auto flex flex-col items-center justify-start p-10">
                <h1 className="text-4xl font-bold text-black">{project?.title || "DirtyBox"}</h1>
                <p className="text-center mt-4 text-xl text-gray-800 pb-8">
                    {project?.description || "A project created for YCPHacks using Raspberry Pi Zero 2w."}
                </p>
                <div className="w-full max-w-4xl">
                    <iframe 
                        title="LinkedIn Post - DirtyBox" 
                        className="w-full h-[600px] border-0"
                        src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7262188939971551232"
                        allowFullScreen
                    >
                    </iframe>
                </div>
            </div>
        </div>
    );
}
export default DirtyBox;

