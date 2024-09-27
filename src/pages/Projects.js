import React from "react";
import projects from '../objects/projects';
import ycpprojects from '../objects/ycpprojects';
import ProjectSummary from '../components/ProjectSummary';
import GodotIcon from '../images/godotlogo.png'
import YCPIcon from '../images/ycpicon.png'

function Home(){
    return( 
      <div className="bg-gray-100">
      <div className="md:mx-26 lg:mx-52 p-8 bg-gray-100">
      <div className="flex flex-row">
        <h2 className="pt-16 text-3xl font-bold  text-gray-500">YCP Projects</h2>
        <img className="ml-auto" src = {YCPIcon} alt="York College of Pennsylvania" width="112px"></img>
      </div>
      {ycpprojects.map(project => (
        <ProjectSummary
        key={project.id}
        title={project.title}
        description={project.smalldesc}
        image={project.image}
        link={project.link}
        submissiondate={project.date}
        />
      ))}
      <div className="flex">
        <h2 className="sm:pt-10 text-3xl font-bold  text-gray-500">Godot Game Jams <p className="text-sm sm:text-xl font-normal">Reference Itch.io pages to see credited developers</p></h2>
        <img className=" ml-auto w-[100px] h-[100px] " src = {GodotIcon} alt = "Godot icon"></img>
      </div>
     
      {projects.map(project => (
        <ProjectSummary
          key={project.id}
          title={project.title}
          description={project.smalldesc}
          image={project.image}
          link={project.link}
          submissiondate={project.submissiondate}
        />
      ))}
    </div>
    </div>
    );
}
export default Home;