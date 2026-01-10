import React from "react";
import courtsidelogo from '../images/courtsidelogo.png'
import scheduleApp from '../images/ScheduleApp.png'
import techStack from '../images/TechStack.png'
import infobeamer from '../images/Infobeamer.png'
import courtsideActivation from '../images/CourtsideActivation.jpg'
import cccumlBlurred from '../images/CCCUMLBlurred.png'

function CourtsideWork() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <div className="text-center pt-20 pb-12 px-4">
                <img className="inline-block w-1/4 h-1/4 object-scale-down mb-4" alt="Courtside Video Entertainment logo" src={courtsidelogo} />
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">Full Stack Engineering Intern</h1>
                <p className="text-xl md:text-2xl text-gray-600">Philadelphia, PA</p>
            </div>

            {/* Article Content Section */}
            <article className="bg-gray-100 max-w-4xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
                {/* Introduction Paragraph */}
                <div className="prose prose-lg max-w-none">
                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8">
                        I am designing and developing the full stack Creative Control Center for this startup. I built out a full UML diagram and designed the database schema for the app which will allow users to manage their assets, schedule game playlists, execute playlists in real time, control their registered devices, and provide admin interfaces.
                    </p>
                </div>

                {/* UML Diagram Image - Full Width */}
                <figure className="my-10 md:my-12">
                    <img 
                        className="w-full rounded-lg shadow-lg border border-gray-300" 
                        src={cccumlBlurred} 
                        alt="CCC UML Diagram showing the architecture and relationships of the Creative Control Center" 
                    />
                    <figcaption className="text-sm md:text-base text-gray-600 mt-3 text-center italic">
                        UML diagram illustrating the Creative Control Center architecture and database relationships. Blurred for security reasons.
                    </figcaption>
                </figure>

                {/* Continuation Paragraph */}
                <div className="prose prose-lg max-w-none">
                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8">
                        Throughout this process, I've been working closely with the founders to understand their vision and translate it into a robust, scalable application architecture.
                    </p>
                </div>

                {/* Schedule App Image - Centered with Text Flow */}
                <figure className="my-10 md:my-12">
                    <img 
                        className="w-full max-w-3xl mx-auto rounded-lg shadow-lg border border-gray-300" 
                        src={scheduleApp} 
                        alt="Schedule App interface showing playlist scheduling functionality" 
                    />
                    <figcaption className="text-sm md:text-base text-gray-600 mt-3 text-center italic">
                        The scheduling interface allows users to create and manage game playlists with ease.
                    </figcaption>
                </figure>

                {/* Courtside Activation Image */}
                <figure className="my-10 md:my-12">
                    <img 
                        className="w-full max-w-3xl mx-auto rounded-lg shadow-lg border border-gray-300" 
                        src={courtsideActivation} 
                        alt="Courtside Activation system showing device control interface" 
                    />
                    <figcaption className="text-sm md:text-base text-gray-600 mt-3 text-center italic">
                        Device activation and control interface for managing registered Courtside devices.
                    </figcaption>
                </figure>
            </article>

            {/* Second Article Content Section */}
            <article className="bg-gray-900 max-w-4xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
                {/* Experience Paragraphs */}
                <div className="prose prose-lg max-w-none">
                    <p className="text-lg md:text-xl text-white leading-relaxed mb-8">
                        This role has provided me with invaluable experience in full-stack development, from database design to frontend implementation.
                    </p>
                    <p className="text-lg md:text-xl text-white leading-relaxed mb-8">
                        Working at a startup has allowed me to take on significant responsibility and see the direct impact of my contributions on the product.
                    </p>
                    <p className="text-lg md:text-xl text-white leading-relaxed mb-8">
                        I've enjoyed the challenge of building a complex system from the ground up and collaborating with a small, dedicated team.
                    </p>
                </div>

                {/* Tech Stack Image */}
                <figure className="my-10 md:my-12">
                    <img 
                        className="w-full max-w-3xl mx-auto rounded-lg shadow-lg border border-gray-700" 
                        src={techStack} 
                        alt="Technology stack used in the Creative Control Center project" 
                    />
                    <figcaption className="text-sm md:text-base text-gray-300 mt-3 text-center italic">
                        The technology stack powering the Creative Control Center, including modern frontend and backend frameworks.
                    </figcaption>
                </figure>

                {/* Infobeamer Image */}
                <figure className="my-10 md:my-12">
                    <img 
                        className="w-full max-w-3xl mx-auto rounded-lg shadow-lg border border-gray-700" 
                        src={infobeamer} 
                        alt="Infobeamer integration showing content management capabilities" 
                    />
                    <figcaption className="text-sm md:text-base text-gray-300 mt-3 text-center italic">
                        Infobeamer integration demonstrating the content management and display capabilities of the system.
                    </figcaption>
                </figure>
            </article>
        </div>
    );
}

export default CourtsideWork;

