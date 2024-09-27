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
      

      
        <div className="bg-gray-400 p-8 md:p-24 lg:p-32 text-xl md:text-3xl lg:text-5xl font-bold text-white justify-items-center flex flex-col md:flex-none lg:flex-none items-center">
           
            <p className="">Spearheaded the creation of a multiplayer party game within Unreal Engine 5 and C++ and served as the lead engineer by developing the networking and game framework.
            <br className="mb-6"></br><br></br>
            Adapted to an existing codebase, developing new features for an ongoing project.</p>
            <img className="pt-8 inline-block rounded ml-auto mr-auto w-auto lg:w-3/4 h-auto" src={img2} alt="Brandon Woodward"></img><br></br>
        

      </div>
    
      
      <div className="p-8 md:p-24 lg:p-32  text-xl md:text-3xl lg:text-5xl font-bold bg-gray-900 text-white flex flex-col items-center">
      <p className=""></p>
        Here I developed my teamwork skills by constantly working with interns, mentors, and employees of a plethora of specializations.  {/*I learned much from the great Seth Davis and Joseph Robinson! */}
        <br></br><br></br>Due to my willingness to receive mentorship from coworkers and mentors, I was able to quickly develop and refine my abilities. 
        <br></br><br></br>As a team of interns, we piggybacked off eachother and developed into a powerful force of development.
        <img className="rounded relative inline-block mr-auto w-auto h-auto" src={img1} alt="Brandon Woodward"></img>
      </div>
      <div className="bg-gray-400 text-white">
      <p className="text-center pt-20 text-5xl font-bold pb-8">Other Work Experience</p>
      <ul >
        <li className="text-center text-2xl pb-4 mr-4 ml-4 ">&bull; Lifeguard at DRD Pools for three summers: 2019, 2020, and 2021 </li>
        <li className="text-center text-2xl pb-10 mr-4 ml-4">&bull; Leadership Training Counselor at Beth Tfiloh Camps in 2018</li>
      </ul>  
      </div>
      
    </div>
    );
}
export default Work;