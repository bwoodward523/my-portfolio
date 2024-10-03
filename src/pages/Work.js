import React from "react";
import img1 from "../images/InternsFiraxisHappy.jpg";
import img2 from "../images/HappySethBrandonFiraxis.jpg";
import firaxislogo from "../images/firaxis.png";

function Work() {
    return (
        <div className="bg-white">
            <p className="text-center p-2 pt-20 text-5xl font-bold ">
                <img className="inline" alt="Firaxis logo" src={firaxislogo} />
                <br /> Engineering Intern <br />
            </p>
            <p className="text-center pt-6 text-3xl font-bold mb-6">Sparks, MD</p>

            <div className="bg-gray-400 p-8 md:p-24 lg:p-32 text-xl md:text-3xl lg:text-5xl font-bold text-white justify-items-center flex flex-col md:flex-none lg:flex-none items-center">
                <p className="">
                I took the lead in a title called Callisto, it is a multiplayer party game using Unreal Engine 5 and C++. I was responsible for developing the networking and game framework. Meaning I created the game loop, the basic multiplayer functionalities, most of the UI, the basic environment and some fun mechanics. 
                    <br className="mb-6" />
                    <br />

Throughout this process, I honed my teamwork skills by collaborating closely with interns, mentors, and employees from various specializations.

                </p>
                <img className="pt-8 inline-block rounded ml-auto mr-auto w-auto lg:w-3/4 h-auto" src={img2} alt="Brandon Woodward" />
                <br />
            </div>

            <div className="p-8 md:p-24 lg:p-32 text-xl md:text-3xl lg:text-5xl font-bold bg-gray-900 text-white flex flex-col items-center">
                <p className=""></p>
                My eagerness to learn from my coworkers allowed me to quickly refine my abilities. 
                <br /><br />
                Working alongside my fellow interns, we supported each other and proved a formidable development team.
                <br /><br />
                In addition to the aforementioned, I adapted to an existing codebase, and I implemented new features for an ongoing project.
                <img className="rounded pt-6 relative inline-block mr-auto w-auto h-auto" src={img1} alt="Brandon Woodward" />
            </div>

            <div className="bg-gray-400 text-white">
                <p className="text-center pt-20 text-5xl font-bold pb-8">Other Work Experience</p>
                <ul>
                    <li className="text-center text-2xl pb-4 mr-4 ml-4">&bull; Lifeguard at DRD Pools for three summers: 2019, 2020, and 2021</li>
                    <li className="text-center text-2xl pb-10 mr-4 ml-4">&bull; Leadership Training Counselor at Beth Tfiloh Camps in 2018</li>
                </ul>
            </div>
        </div>
    );
}
export default Work;