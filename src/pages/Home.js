import React from "react";
import img1 from "../images/dopefit.jpg"
import bg from "../images/computerbg.jpg"

function Home(){
    return(  
    <div className="bg-computer-pattern bg-no-repeat  bg-cover to-indigo-500 ">
      <img className="rounded-full pt-10 block ml-auto mr-auto w-64 h-128" src={img1} alt="Brandon Woodward"></img>

      <div className="flex-col items-center">

        <h1 className="relative text-center pt-20 text-5xl font-bold mb-6">Brandon Woodward</h1>
        <h2 className="relative text-center pb-20 text-4xl font-bold">Software Engineer</h2>
        

      </div>
     


      <div className="bg-blue-600 p-20 text-5xl font-bold flex justify-start text-white">
        Dedicated Junior York College of Pennsylvania student focused on improving and developing skills Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
      </div>
      
    </div>
    );
}
export default Home;