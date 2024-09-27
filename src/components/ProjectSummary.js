import React from 'react';
import { Link } from 'react-router-dom';

const ProjectSummary = ({title, description, image, link, submissiondate}) => {
  return (
    <Link to={link}>
    <div className="hover:animate-pulse flex items-center mb-8 p-4 border rounded-lg shadow-md hidden sm:flex ">
      
        <div className="flex-1 ">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-700">{description}<br></br>{submissiondate}</p>
        </div>
        <div className="mr-4 flex-shrink-0">
            <img
            src={image}
            alt={title}
            className="w-32 h-32 object-cover rounded-lg shadow-lg"
            />
        </div>  
    </div>
    <div className="hover:animate-pulse flex flex-col items-center mb-8 p-4 border rounded-lg shadow-md sm:hidden">
          
        <div className="flex-1 ">
        
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <img
            src={image}
            alt={title}
            className="w-32 h-32 object-cover rounded-lg shadow-lg"
            />
            <p className="text-gray-700">{description}<br></br>{submissiondate}</p>
        </div>
        <div className="mr-4 flex-shrink-0">
            
        </div>
        
    </div>
    </Link>
    
  );
};

export default ProjectSummary;