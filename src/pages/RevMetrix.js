import React from "react";
import projects from '../objects/ycpprojects';
import '../pages/Project1.css'
//import vid from '../images/Revmetrix.mkv'
/*<video className="w-auto" controls>
                <source src={vid}></source>
            </video>*/
function RevMetrix() {
    return(
        <div>
            <div className="bg-gray-100 h-auto flex flex-col items-center justify-start p-7 sm:p10">
                <h1 className="text-4xl font-bold text-black">{projects[1].title}</h1>
                <p className="text-center mt-4 text-xl text-gray-800 pb-8" >This project was created as an assignment for the software engineering course at my York College of Pennsylvania. It was really interesting because we had to use Java Servlets and jsp webpages. I really enjoyed working on this project with a team of three other computer science studes (Emmet Larson, Zach Cox, and Emily Culp) In the video below I showcase what the project and specify the parts that I developed!</p>
                <iframe  allowFullScreen title="revmetrix" className="w-auto sm:w-3/5 sm:h-80" src="https://www.youtube.com/embed/H8Hx7r2bFRE"></iframe>
                
            </div>
          
            <p className="bg-gray-400 text-center pt-20 text-5xl font-bold text-white">Role & Goal</p>
            <div className="flex flex-col sm:flex-row text-center">
                <div className="bg-gray-400 p-4 sm:p-10 text-2xl sm:text-3xl font-bold flex justify-center text-white">
                    {projects[1].role}
                </div>
                <div className="bg-gray-400 p-4 sm:p-10 text-2xl sm:text-3xl font-bold flex justify-center text-white">
                    {projects[1].goal}
                </div>
            </div>
            <div className="p-20 text-5xl font-bold bg-gray-900 text-white flex flex-col">
                <p className="text-center pb-5">{projects[0].placement}</p>
                <a href="https://github.com/emmetl913/RevMetrixUI-Database"  target="_blank" rel="noopener noreferrer" className="text-center bg-blue-500 hover:bg-blue-900 duration-200 text-base sm:text-5xl px-16 py-4 transform hover:scale-105">GitHub Page!</a>
               
            </div>
            
        </div>
    );
}
export default RevMetrix;