import React from 'react';

function ArticleSection({ 
    children, 
    variant = 'light', // 'light' or 'dark'
    className = "" 
}) {
    const bgColor = variant === 'dark' ? 'bg-gray-900' : 'bg-gray-100';
    // const textColor = variant === 'dark' ? 'text-white' : 'text-gray-800';
    
    return (
        <article className={`${bgColor} max-w-4xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 ${className}`}>
            {children}
        </article>
    );
}

export default ArticleSection;
