import React from "react";
import projects from '../objects/projects';
import ProjectSummary from '../components/ProjectSummary';
import GodotIcon from '../images/godotlogo.png'

function Home(){
    return(
      <div className="p-8 bg-gray-100">
      <h1 className="text-5xl font-bold mb-6 underline">My Projects</h1>
      <div className="flex flex-row">
      <h2 className="pt-16 text-3xl font-bold  text-gray-500">Godot Game Jams</h2>
      <img className="ml-auto" src = {GodotIcon} alt = "Godot icon" width="100px"></img>
      </div>
     
      {projects.map(project => (
        <ProjectSummary
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
          submissiondate={project.submissiondate}
        />
      ))}
    </div>
    );
}
export default Home;