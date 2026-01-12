import React from 'react';

/**
 * Extracts YouTube video ID from various YouTube URL formats
 */
function extractYouTubeId(url) {
    if (!url) return null;
    
    // Handle different YouTube URL formats
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /youtube\.com\/watch\?.*v=([^&\n?#]+)/
    ];
    
    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) return match[1];
    }
    
    // If it's already just an ID (no URL)
    if (/^[a-zA-Z0-9_-]{11}$/.test(url)) {
        return url;
    }
    
    return null;
}

function ArticleVideo({ 
    youtubeUrl, // Full YouTube URL or just video ID
    caption, 
    variant = 'light', // 'light' or 'dark'
    fullWidth = false, // true for full width, false for max-w-3xl
    className = "" 
}) {
    const videoId = extractYouTubeId(youtubeUrl);
    
    if (!videoId) {
        console.error('Invalid YouTube URL or video ID:', youtubeUrl);
        return null;
    }
    
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    const borderColor = variant === 'dark' ? 'border-gray-700' : 'border-gray-300';
    const captionColor = variant === 'dark' ? 'text-gray-300' : 'text-gray-600';
    const videoWidth = fullWidth ? 'w-full' : 'w-full max-w-3xl mx-auto';
    
    return (
        <figure className={`my-10 md:my-12 ${className}`}>
            <div className={`${videoWidth} rounded-lg shadow-lg border ${borderColor} overflow-hidden`}>
                <div className="relative" style={{ paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio */}
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={embedUrl}
                        title={caption || "YouTube video"}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
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

export default ArticleVideo;
