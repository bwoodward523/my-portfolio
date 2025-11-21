import React from "react";
import jcilogo from '../images/Johnson_Controls.svg.webp'

function JCIWork() {
    const jciPoster = `${process.env.PUBLIC_URL}/JCIPoster.pdf`;
    
    return (
        <div className="bg-white">
            <p className="text-center p-2 pt-20 text-5xl font-bold ">
                <img className="inline w-1/4 h-1/4 object-scale-down" alt="Johnson Controls logo" src={jcilogo} />
                <br /> Software Test Automation Engineering Intern <br />
            </p>
            <p className="text-center pt-6 text-3xl font-bold mb-6">New Freedom, PA</p>
            <div className="bg-gray-100 p-8 md:p-16 lg:p-20 flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 text-center">Project Poster</h2>
                <div className="w-full max-w-4xl">
                    <iframe 
                        src={jciPoster}
                        className="w-full h-[600px] md:h-[800px] lg:h-[1000px] border-2 border-gray-300 rounded-lg shadow-lg"
                        title="JCI Project Poster"
                        type="application/pdf"
                    >
                        <p className="text-center p-4">Your browser does not support PDFs. <a href={jciPoster} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Click here to download the PDF</a>.</p>
                    </iframe>
                </div>
            </div>
            {/* <div className="bg-gray-400 p-8 md:p-24 lg:p-24 text-xl md:text-3xl lg:text-5xl font-bold text-white justify-items-center flex flex-col md:flex-none lg:flex-none items-center">
                <p className="mx-4 ">

                </p>
            </div> */}

            <div className="p-8 md:p-24 lg:p-24 text-xl md:text-3xl lg:text-5xl font-bold bg-gray-900 text-white flex flex-col items-center">
                <p className="mx-4 ">
                    I really cherished the time I spent at Johnson Controls. Dr. Joe Villani is a fantastic mentor and the environment was extremely supportive! <br/>  <br/>
                    This was a remarkable opportuntiy to learn and grow as a developer and contribute to a real product in such a meaningful manner! <br/> <br/>
                    I'd also like to stress the scope of my accomplishments in such a short period of time. I was only at the site for three months, two days a week yet I managed to create everything you see in the poster!
                </p>
            </div>

          
        </div>
    );
}

export default JCIWork;

