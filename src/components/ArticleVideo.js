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
    
    // Construct YouTube thumbnail URL (maxresdefault for highest quality, fallback to hqdefault)
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    const borderColor = variant === 'dark' ? 'border-gray-700' : 'border-gray-300';
    const captionColor = variant === 'dark' ? 'text-gray-300' : 'text-gray-600';
    const videoWidth = fullWidth ? 'w-full' : 'w-full max-w-3xl mx-auto';
    
    // Ensure we have the full YouTube URL
    const fullYoutubeUrl = youtubeUrl.startsWith('http') ? youtubeUrl : `https://www.youtube.com/watch?v=${videoId}`;
    
    return (
        <figure className={`my-10 md:my-12 ${className}`}>
            <a 
                href={fullYoutubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${videoWidth} block cursor-pointer group transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl`}
            >
                <div className={`relative shadow-lg border ${borderColor} overflow-hidden rounded-lg`}>
                    <div className="relative" style={{ paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio */}
                        {/* Thumbnail Image */}
                        <img
                            src={thumbnailUrl}
                            alt={caption || "YouTube video thumbnail"}
                            className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
                            onError={(e) => {
                                // Fallback to hqdefault if maxresdefault fails
                                e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                            }}
                        />
                        
                        {/* Dark overlay on hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                        
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-red-600 rounded-full p-6 md:p-8 shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:bg-red-700">
                                <svg 
                                    className="w-12 h-12 md:w-16 md:h-16 text-white ml-1" 
                                    fill="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                            </div>
                        </div>
                        
                        {/* YouTube logo badge in corner */}
                        <div className="absolute bottom-2 right-2 bg-black/75 rounded px-2 py-1 flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                            <span className="text-white text-xs font-semibold">YouTube</span>
                        </div>
                    </div>
                </div>
            </a>
            {caption && (
                <figcaption className={`text-sm md:text-base ${captionColor} mt-3 text-center italic`}>
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}

export default ArticleVideo;
