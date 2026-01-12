import React from "react";
import projects from '../objects/ycpprojects';
import ArticleLayout, { ArticleHeader, ArticleSection, ArticleParagraph, ArticleVideo } from '../components/ArticleLayout';

function MazeAlgorithm() {
    const project = projects.find(p => p.id === 3);
    
    return(
        <ArticleLayout>
            <ArticleHeader 
                title={project?.title || "MazeAlgorithm Visualization OpenGL"}
                subtitle={project?.description || "[Description to be added]"}
            />

            <ArticleSection variant="light">
                {project?.description && project.description !== "[Description to be added]" ? (
                    <ArticleParagraph>
                        {project.description}
                    </ArticleParagraph>
                ) : (
                    <ArticleParagraph>
                        [Description to be added]
                    </ArticleParagraph>
                )}

                <ArticleVideo 
                    youtubeUrl="https://www.youtube.com/watch?v=1SJbIdNnsfM"
                    caption="See a tour of the project on YouTube!"
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
        </ArticleLayout>
    );
}
export default MazeAlgorithm;
