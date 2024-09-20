import React from "react";
import img1 from "../images/dopefit.jpg"

function Contact(){
    return(  
    <div className="bg-cover to-indigo-500 ">
      <img className="rounded-full pt-10 block ml-auto mr-auto w-64 h-128" src={img1} alt="Brandon Woodward"></img>

      <div className="flex-col items-end">

        <h1 className="relative  pt-20 text-5xl font-bold mb-6">Brandon Woodward</h1>
        <h2 className="relative text-center pb-20 text-4xl font-bold">Software Engineer</h2>
        

      </div>      
    </div>
    );
}
export default Contact;