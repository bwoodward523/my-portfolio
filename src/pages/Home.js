import React from "react";
import img1 from "../images/dopefit.jpg";
import resume from "./WoodwardResumeFall2024.pdf";

function Home(){
    return(  
      //className=" bg-computer-pattern"
    <div className=" bg-no-repeat  bg-cover to-indigo-500 ">        

     
      <div className="flex flex-col justify-center items-center">
      <img className="rounded-full pt-10 block ml-auto mr-auto w-64 h-128" src={img1} alt="Brandon Woodward"></img>
        <div className="">
          <h1 className="relative text-center pt-20 text-5xl font-bold mb-6">Brandon Woodward</h1>
          <h2 className="relative text-center pb-20 text-4xl font-bold">Software Engineer</h2>
        </div>

        
        

      </div>
     


      <div className="bg-gray-900 p-20 text-5xl font-bold flex justify-start text-white px-52">
        Dedicated Junior York College of Pennsylvania student focused on improving and developing skills Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
      </div>
      
      <div className="bg-gray-400 p-20 font-bold text-white">
        <h1 className="text-center pr-5 text-5xl">Get In Touch</h1><br></br>
        <div className="flex justify-center text-white space-x-10  text-3xl ">
          <a href="https://github.com/bwoodward523" className="bg-blue-500 hover:bg-blue-900 duration-200 px-16 py-4 transform hover:scale-105">GitHub</a>
          <a href={resume} className="bg-blue-500 hover:bg-blue-900 duration-200 px-16 py-4 transform hover:scale-105">Resume</a>
          <a href="https://ycp.joinhandshake.com/profiles/50329402" className="bg-blue-500 hover:bg-blue-900 duration-200 px-16 py-4 transform hover:scale-105">Handshake</a>
        </div>
        

      </div>
    </div>
    );
}
export default Home;