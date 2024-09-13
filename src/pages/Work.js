import React from "react";
import img1 from "../images/InternsFiraxisHappy.jpg"
import img2 from "../images/HappySethBrandonFiraxis.jpg"
import firaxislogo from "../images/firaxis.png"
function Work(){
    return(  
    <div className="bg-white">
      <p className="text-center pt-20 text-5xl font-bold "> 
        <img className="inline" alt="firaxis logo" src={firaxislogo}></img>
        <br></br> Engineering Intern <br></br> 
      </p>
      <p className="text-center pt-6 text-3xl font-bold mb-6"> Sparks, MD</p>
      

     
      <div className="bg-gray-400 p-20 text-5xl font-bold flex justify-center text-white">
            <p className="p-10">Spearheaded the creation of a multiplayer party game within Unreal Engine 5 and C++ and served as the lead engineer by developing the networking and game framework.
            <br className="mb-6"></br><br></br>
            Adapted to an existing codebase, developing new features for an ongoing project.</p>
        <div className=" ">
            <img className="rounded relative block ml-auto mr-auto" src={img2} alt="Brandon Woodward"></img><br></br>
        </div>
        

      </div>
      <div className="p-20 text-5xl font-bold bg-gray-900 text-white flex">
      <img className="rounded relative block pl-1 mr-auto w-1/2 h-1/2" src={img1} alt="Brandon Woodward"></img>
      <p className="p-10"></p>
        Here I developed my teamwork skills by constantly working with interns, mentors, and employees of a plethora of specializations.  {/*I learned much from the great Seth Davis and Joseph Robinson! */}
        <br></br><br></br>Due to my willingness to receive mentorship from coworkers and mentors, I was able to quickly develop and refine my abilities. 
        <br></br><br></br>As a team of interns, we piggybacked off eachother and developed into a powerful force of development.
      </div>
     
    </div>
    );
}
export default Work;