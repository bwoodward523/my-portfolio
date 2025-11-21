import React from "react";
import courtsidelogo from '../images/courtsidelogo.png'
import scheduleApp from '../images/ScheduleApp.png'
import techStack from '../images/TechStack.png'
import infobeamer from '../images/Infobeamer.png'
import courtsideActivation from '../images/CourtsideActivation.jpg'

function CourtsideWork() {
    return (
        <div className="bg-white">
            <p className="text-center p-2 pt-20 text-5xl font-bold ">
                <img className="inline w-1/4 h-1/4 object-scale-down" alt="Courtside Video Entertainment logo" src={courtsidelogo} />
                <br /> Full Stack Engineering Intern <br />
            </p>
            <p className="text-center pt-6 text-3xl font-bold mb-6">Philadelphia, PA</p>
            <p className="text-center pt-6 text-3xl font-bold mb-6">THE TEXT IN THIS PAGE IS PLACEHOLDER TEXT ... THE PAGE IS UNDER CONSTRUCTION</p>
            <div className="bg-gray-400 p-8 md:p-24 lg:p-24 text-xl md:text-3xl lg:text-5xl font-bold text-white justify-items-center flex flex-col md:flex-none lg:flex-none items-center">
                <p className="mx-4 ">
                    I am designing and developing the full stack Creative Control Center for this startup. I built out a full UML diagram and designed the database schema for the app which will allow users to manage their assets, schedule game playlists, execute playlists in real time, control their registered devices, and provide admin interfaces.
                    <br className=""  />
                    <br />

                    Throughout this process, I've been working closely with the founders to understand their vision and translate it into a robust, scalable application architecture.
                </p>
                <img className="pt-8 inline-block rounded ml-auto mr-auto w-auto lg:w-3/4 h-auto" src={scheduleApp} alt="Schedule App" />
                <br />
                <img className="pt-8 inline-block rounded ml-auto mr-auto w-auto lg:w-3/4 h-auto" src={courtsideActivation} alt="Courtside Activation" />
                <br />
            </div>

            <div className="p-8 md:p-24 lg:p-24 text-xl md:text-3xl lg:text-5xl font-bold bg-gray-900 text-white flex flex-col items-center">
                <p className="mx-4">
                    This role has provided me with invaluable experience in full-stack development, from database design to frontend implementation.
                    <br /><br />
                    Working at a startup has allowed me to take on significant responsibility and see the direct impact of my contributions on the product.
                    <br /><br />
                    I've enjoyed the challenge of building a complex system from the ground up and collaborating with a small, dedicated team.
                </p>
                <img className="rounded pt-6 relative inline-block mr-auto w-auto lg:w-3/4 h-auto" src={techStack} alt="Tech Stack" />
                <br />
                <img className="rounded pt-6 relative inline-block mr-auto w-auto lg:w-3/4 h-auto" src={infobeamer} alt="Infobeamer" />
            </div>
        </div>
    );
}

export default CourtsideWork;

