import React from 'react';

function ArticleParagraph({ 
    children, 
    variant = 'light', // 'light' or 'dark'
    className = "" 
}) {
    const textColor = variant === 'dark' ? 'text-white' : 'text-gray-800';
    
    return (
        <div className={`prose prose-lg max-w-none ${className}`}>
            <p className={`text-lg md:text-xl ${textColor} leading-relaxed mb-8`}>
                {children}
            </p>
        </div>
    );
}

export default ArticleParagraph;
