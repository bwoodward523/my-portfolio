import React from 'react';

function ArticleFigure({ 
    src, 
    alt, 
    caption, 
    variant = 'light', // 'light' or 'dark'
    fullWidth = false, // true for full width, false for max-w-3xl
    className = "" 
}) {
    const borderColor = variant === 'dark' ? 'border-gray-700' : 'border-gray-300';
    const captionColor = variant === 'dark' ? 'text-gray-300' : 'text-gray-600';
    const imageWidth = fullWidth ? 'w-full' : 'w-full max-w-3xl mx-auto';
    
    return (
        <figure className={`my-10 md:my-12 ${className}`}>
            <img 
                className={`${imageWidth} rounded-lg shadow-lg border ${borderColor}`}
                src={src}
                alt={alt || ""}
            />
            {caption && (
                <figcaption className={`text-sm md:text-base ${captionColor} mt-3 text-center italic`}>
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}

export default ArticleFigure;
