import React from "react";
import projects from '../objects/projects';
import ArticleLayout, { ArticleHeader, ArticleSection, ArticleIframe } from '../components/ArticleLayout';

//PTM
function Project2() {
    const project = projects.find(p => p.id === 4);
    
    return(
        <ArticleLayout>
            <ArticleHeader 
                title={project?.title || "Peace to the Meadow"}
                subtitle={project?.description || "[Description to be added]"}
            />

            <ArticleSection variant="light">
                <ArticleIframe 
                    src={`${process.env.PUBLIC_URL}/PeacetotheMeadow/index.html`}
                    title="Peace to the Meadow"
                    fullWidth={true}
                    variant="light"
                />
            </ArticleSection>

            <ArticleSection variant="dark">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-8 text-center">Role & Goal</h2>
                <div className="flex flex-col sm:flex-row text-center gap-4">
                    <div className="p-4 sm:p-10 text-xl sm:text-2xl font-bold flex justify-center items-center text-white flex-1 bg-gray-800 rounded-lg">
                        <div>
                            <h3 className="text-2xl sm:text-3xl mb-4 text-blue-400">Role</h3>
                            <p>{project?.role || "[Role to be added]"}</p>
                        </div>
                    </div>
                    <div className="p-4 sm:p-10 text-xl sm:text-2xl font-bold flex justify-center items-center text-white flex-1 bg-gray-800 rounded-lg">
                        <div>
                            <h3 className="text-2xl sm:text-3xl mb-4 text-blue-400">Goal</h3>
                            <p>{project?.goal || "[Goal to be added]"}</p>
                        </div>
                    </div>
                </div>
            </ArticleSection>

            <ArticleSection variant="dark">
                <div className="text-center">
                    <p className="text-2xl sm:text-4xl font-bold text-white mb-8">{project?.placement || "[Placement to be added]"}</p>
                    {project?.itchio && (
                        <a 
                            href={project.itchio} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-block text-xs sm:text-2xl bg-blue-500 hover:bg-blue-700 duration-200 px-8 py-4 transform hover:scale-105 rounded-lg text-white font-bold"
                        >
                            Project Submission Page
                        </a>
                    )}
                </div>
            </ArticleSection>
        </ArticleLayout>
    );
}
export default Project2;
