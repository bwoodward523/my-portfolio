import React from "react";
import img1 from "../images/dopefit.jpg";
import resume from "./WoodwardResumeFall2024.pdf";

function Home(){
    return(  
      //className=" bg-computer-pattern"
    <div className="flex flex-col flex-grow bg-no-repeat  bg-cover to-indigo-500 ">        

     
      <div className="flex flex-col justify-center items-center">
      <img className="rounded-full pt-10 block ml-auto mr-auto w-64 h-128" src={img1} alt="Brandon Woodward"></img>
        <div className="">
          <h1 className="relative text-center pt-20 text-5xl font-bold mb-6">Brandon Woodward</h1>
          <h2 className="relative text-center pb-20 text-4xl font-bold">Software Engineer</h2>
        </div>
      </div>
     


      <div className="bg-gray-900 p-20 text-5xl font-bold flex justify-center text-white md:px-52 lg:px-52 text-center">
        Dedicated Junior York College of Pennsylvania student focused on improving and developing skills, building connections with others, and creating interesting software projects. 
      </div>
      
      <div className="bg-gray-400 p-20 font-bold text-white">
        <h1 className="text-center text-5xl">Get In Touch</h1><br></br>
        <div className="flex sm:py-3 flex-col space-y-4 md:space-y-0 lg:space-y-0 md:flex-row lg:flex-row justify-between md:justify-center md:space-x-5  lg:space-x-20 lg:justify-center text-white  text-3xl ">
          <a href="https://github.com/bwoodward523" className="bg-blue-500 hover:bg-blue-900 duration-200 text-center p-8 transform hover:scale-105">GitHub</a>
          <a href={resume} className="bg-blue-500 hover:bg-blue-900  duration-200 text-center p-8 transform hover:scale-105">Resume</a>
          <a href="https://ycp.joinhandshake.com/profiles/50329402" className="bg-blue-500 hover:bg-blue-900 duration-200 text-center p-8 transform hover:scale-105">Handshake</a>
        </div>
        <div className="flex flex-col flex-grow justify-center bg-gray-400 text-white pt-20">
          <ul >
            <li className="text-center text-2xl pb-4">443-862-7644 </li>
            <li className="text-center text-2xl pb-10 "><a className="transition hover:text-blue-600 duration-400"href= "mailto: bwoodward@ycp.edu">bwoodward@ycp.edu</a></li>
          </ul>  
        </div>

      </div>
    </div>
    );
}
export default Home;