import React from 'react';

function ArticleHeader({ logo, logoAlt, title, subtitle, className = "" }) {
    return (
        <div className={`text-center pt-20 pb-12 px-4 ${className}`}>
            {logo && (
                <img 
                    className="inline-block w-1/4 h-1/4 object-scale-down mb-4" 
                    alt={logoAlt || "Logo"} 
                    src={logo} 
                />
            )}
            {title && (
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                    {title}
                </h1>
            )}
            {subtitle && (
                <p className="text-xl md:text-2xl text-gray-600">
                    {subtitle}
                </p>
            )}
        </div>
    );
}

export default ArticleHeader;
