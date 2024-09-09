import React from "react";
import projects from '../objects/projects';
import ProjectSummary from '../components/ProjectSummary';

function Home(){
    return(
      <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      {projects.map(project => (
        <ProjectSummary
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
    );
}
export default Home;