import React from 'react';

/**
 * ArticleIframe - Component for embedding game iframes in article layouts
 * Supports fullscreen and responsive design
 * 
 * Usage:
 * <ArticleIframe 
 *   src="/path/to/game/index.html"
 *   title="Game title"
 *   caption="Optional caption"
 *   variant="light"
 *   fullWidth={true}
 * />
 */
function ArticleIframe({ 
    src, // Source URL for the iframe
    title, // Title for the iframe
    caption, // Optional caption
    variant = 'light', // 'light' or 'dark'
    fullWidth = true, // true for full width, false for max-w-3xl
    className = "",
    mobileMessage = "This website features an embedded version of this game which is only available on a personal computer." // Message shown on mobile
}) {
    if (!src) {
        console.error('ArticleIframe: src prop is required');
        return null;
    }
    
    const borderColor = variant === 'dark' ? 'border-gray-700' : 'border-gray-300';
    const captionColor = variant === 'dark' ? 'text-gray-300' : 'text-gray-600';
    const messageColor = variant === 'dark' ? 'text-gray-300' : 'text-blue-600';
    const iframeWidth = fullWidth ? 'w-full' : 'w-full max-w-3xl mx-auto';
    
    return (
        <figure className={`my-10 md:my-12 ${className}`}>
            <div className={`${iframeWidth} shadow-lg border ${borderColor} overflow-hidden`}>
                {/* Desktop iframe - hidden on mobile, shown on sm and up */}
                <div className="hidden sm:block">
                    <div className="relative" style={{ paddingBottom: '68.75%' }}> {/* 960x660 aspect ratio */}
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={src}
                            title={title || "Game iframe"}
                            frameBorder="0"
                            allow="fullscreen; autoplay; gamepad; microphone; camera"
                            allowFullScreen
                        />
                    </div>
                </div>
                
                {/* Mobile message */}
                <div className={`sm:hidden pt-48 text-xl font-bold text-center ${messageColor} px-4`}>
                    {mobileMessage}
                </div>
            </div>
            {caption && (
                <figcaption className={`text-sm md:text-base ${captionColor} mt-3 text-center italic`}>
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}

export default ArticleIframe;
