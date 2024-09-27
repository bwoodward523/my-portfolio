import React from "react";
import projects from '../objects/ycpprojects';
import '../pages/Project1.css'
import vid from '../images/OpenGLHouse.mkv'

function Kratz() {
    return(
        <div>
            <div className="bg-gray-100 h-auto flex flex-col items-center justify-start p-7 sm:p-10">
                <h1 className="text-4xl font-bold text-black">{projects[1].title}</h1>
                <p className="text-center mt-4 text-xl text-gray-800 pb-16" >Created in the highly coveted CLion IDE, this one room house features a spinning fan, light switches, a functioning mirror, beautiful art, soda bubbles, and tons of 3D models and textures! The carpet and door utilize normal and bump mapping. All 3D models except for the Christmas Tree were made by me. The holiday spirit was added to create this video as a happy holiday showcase of my work.</p>
                <video className="w-auto" controls>
                <source src={vid}></source>
            </video>
            <p className="text-center mt-4 text-xl text-gray-800" >  </p>
            </div>
            <p className="bg-gray-400 text-center pt-10 text-5xl font-bold text-white"></p>
                <div className="bg-gray-400 p-8 sm:p-10 text-xl sm:text-3xl font-bold flex text-center text-white">
                   This project taught me just how much goes into the backend of a game engine. To endeavor into adding collisions and physics into this world and create an iterative game engine would be such an extensive process! I really appreciate all the abstractions that already exist in game engines. Nonetheless this project really piqued my curiosity when it comes to developing 3D graphics and simulation software from the ground up!
                </div>       
        </div>
    );
}
export default Kratz;