import React from "react";
import img1 from "../images/dopefit2.jpg";
import resume from "./WoodwardResumeFall2024.pdf";

function Home(){
    return(  
    <div className="flex flex-col flex-grow bg-no-repeat  bg-cover to-indigo-500 ">        

     
      <div className="flex flex-col justify-center items-center">
      <img className=" pt-10 block ml-auto mr-auto w-64 h-128" src={img1} alt="Brandon Woodward"></img>
        <div className="">
          <h1 className="relative text-center pt-20 text-5xl font-bold mb-6">Brandon Woodward</h1>
          <h2 className="relative text-center pb-20 text-4xl font-bold">Software Engineer</h2>
        </div>
      </div>
    
      <div className="bg-gray-900 p-10 sm:p-20 text-3xl md:text-5xl font-bold flex justify-center text-white md:px-24 lg:px-52 text-center">
        A dedicated junior at York College of Pennsylvania focused on creating imaginative, cutting-edge software, expanding my programming skills, and eager to work alongside knowledgeable team members. 
      </div>
      
      <div className="bg-gray-400 pt-10 sm:pt-20 p-20 sm:p-20 font-bold text-white">
        <h1 className="text-center text-5xl">Get in Touch</h1><br></br>
        <div className="flex sm:py-3 flex-col space-y-4 md:space-y-0 lg:space-y-0 md:flex-row lg:flex-row justify-between md:justify-center md:space-x-5  lg:space-x-20 lg:justify-center text-white  text-3xl ">
          <a href="https://github.com/bwoodward523" className="bg-blue-500 hover:bg-blue-900 duration-200 text-center p-8 transform hover:scale-105 sm:w-64">GitHub</a>
          <a href={resume} className="bg-blue-500 hover:bg-blue-900  duration-200 text-center p-8 transform hover:scale-105 sm:w-64">Resume</a>
          <a href="https://www.linkedin.com/in/brandon-woodward-9a6468264/" className="bg-blue-500 hover:bg-blue-900 duration-200 text-center p-8 transform hover:scale-105 sm:w-64">LinkedIn</a>
          <a href="https://ycp.joinhandshake.com/profiles/50329402" className="bg-blue-500 hover:bg-blue-900 duration-200 text-center p-8 transform hover:scale-105 sm:w-64">Handshake</a>
        </div>
        <div className="flex flex-col flex-grow justify-center bg-gray-400 text-white pt-10">
          <ul >
            <li className="text-center text-2xl pb-4">443-862-7644 </li>
            <li className="text-center text-2xl pb-4 "><a className="transition hover:text-blue-600 duration-400"href= "mailto: bwoodward@ycp.edu">bwoodward@ycp.edu</a></li>
          </ul>  
        </div>

      </div>
    </div>
    );
}
export default Home;