import React from 'react';
import { Link } from 'react-router-dom';

const ProjectSummary = ({title, description, image, link, submissiondate}) => {
  return (
    <Link to={link}>
    <div className="hover:scale-[1.02] transition-transform duration-100 items-center mb-8 p-4 border rounded-lg shadow-md hidden sm:flex ">
      
        <div className="flex-1 pr-4">
            <h2 className="text-xl font-semibold mb-2">{title}</h2> <span className="text-gray-700 font-bold">{submissiondate}  &nbsp;</span>
            <span className="text-gray-700 ">{description}&nbsp;</span>
        </div>
        <div className="mr-4 flex-shrink-0">
            <img
            src={image}
            alt={title}
            className="w-48 h-32 object-scale-down"
            />
        </div>  
    </div>
    <div className="hover:scale-[1.02] transition-transform duration-100 flex flex-col items-center mb-8 p-4 border rounded-lg shadow-md sm:hidden">
        <h2 className="text-xl font-semibold mb-2 text-center">{title}</h2>
        <img
            src={image}
            alt={title}
            className="w-48 h-32 object-scale-down mb-2"
        />
        <p className="text-gray-700 text-center">
            <span className="font-bold">{submissiondate}</span>
            <br></br>
            {description}
        </p>
    </div>
    </Link>
    
  );
};

export default ProjectSummary;