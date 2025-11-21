import React from "react";
import work from '../objects/work';
import ProjectSummary from '../components/ProjectSummary';

function Work(){
    return( 
      <div className="bg-gray-100 min-h-screen h-full">
        <div className="md:mx-26 lg:mx-52 p-8 bg-gray-100">
            <div className="flex flex-row">
                <h2 className="pt-16 text-3xl font-bold  text-gray-500">Work Experience</h2>
            </div>
            {work.map(workItem => (
                <ProjectSummary
                key={workItem.id}
                title={workItem.title}
                description={workItem.smalldesc}
                image={workItem.image}
                link={workItem.link}
                submissiondate={workItem.date}
                />
            ))}
        </div>
    </div>
    );
}
export default Work;