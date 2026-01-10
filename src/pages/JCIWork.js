import React from "react";
import jcilogo from '../images/Johnson_Controls.svg.webp'
import ArticleLayout, { ArticleHeader, ArticleSection, ArticleParagraph } from '../components/ArticleLayout'

function JCIWork() {
    const jciPoster = `${process.env.PUBLIC_URL}/JCIPoster.pdf`;
    
    return (
        <ArticleLayout>
            <ArticleHeader 
                logo={jcilogo}
                logoAlt="Johnson Controls logo"
                title="Software Test Automation Engineering Intern"
                subtitle="New Freedom, PA"
            />

            <ArticleSection variant="light">
                <ArticleParagraph>
                    I really cherished the time I spent at Johnson Controls. Dr. Joe Villani is a fantastic mentor and the environment was extremely supportive!
                </ArticleParagraph>

                <ArticleParagraph>
                    This was a remarkable opportuntiy to learn and grow as a developer and contribute to a real product in such a meaningful manner!
                </ArticleParagraph>

                <ArticleParagraph>
                    I'd also like to stress the scope of my accomplishments in such a short period of time. I was only at the site for three months, two days a week yet I managed to create everything you see in the poster!
                </ArticleParagraph>
            </ArticleSection>

            <ArticleSection variant="dark">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-8 text-center">Project Poster</h2>
                <div className="w-full max-w-4xl mx-auto">
                    <iframe 
                        src={jciPoster}
                        className="w-full h-[600px] md:h-[800px] lg:h-[1000px] border-2 border-gray-300 rounded-lg shadow-lg"
                        title="JCI Project Poster"
                        type="application/pdf"
                    >
                        <p className="text-center p-4">Your browser does not support PDFs. <a href={jciPoster} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Click here to download the PDF</a>.</p>
                    </iframe>
                </div>
            </ArticleSection>

           
        </ArticleLayout>
    );
}

export default JCIWork;

