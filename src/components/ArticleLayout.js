import React from 'react';
import ArticleHeader from './ArticleHeader';
import ArticleSection from './ArticleSection';
import ArticleParagraph from './ArticleParagraph';
import ArticleFigure from './ArticleFigure';
import ArticleVideo from './ArticleVideo';
import ArticleIframe from './ArticleIframe';

/**
 * ArticleLayout - A wrapper component that provides a standardized article layout
 * 
 * Usage:
 * <ArticleLayout>
 *   <ArticleHeader logo={logo} title="Title" subtitle="Subtitle" />
 *   <ArticleSection variant="light">
 *     <ArticleParagraph>Content here</ArticleParagraph>
 *     <ArticleFigure src={img} alt="Alt" caption="Caption" />
 *     <ArticleIframe src="/path/to/game.html" title="Game" />
 *   </ArticleSection>
 *   <ArticleSection variant="dark">
 *     <ArticleParagraph variant="dark">More content</ArticleParagraph>
 *   </ArticleSection>
 * </ArticleLayout>
 */
function ArticleLayout({ children, className = "" }) {
    return (
        <div className={`bg-white ${className}`}>
            {children}
        </div>
    );
}

export default ArticleLayout;
export { ArticleHeader, ArticleSection, ArticleParagraph, ArticleFigure, ArticleVideo, ArticleIframe };
