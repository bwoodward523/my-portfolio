import React from "react";
import projects from '../objects/ycpprojects';
import ArticleLayout, { ArticleHeader, ArticleSection, ArticleParagraph, ArticleVideo } from '../components/ArticleLayout';

function RevMetrix() {
    const project = projects.find(p => p.id === 4);
    
    return(
        <ArticleLayout>
            <ArticleHeader 
                title={project?.title || "RevMetrix: Software Engineering Course"}
                subtitle={project?.description || "A staff of bowlers thirsty for statistics, a website created to portray their wishes."}
            />

            <ArticleSection variant="light">
                <ArticleParagraph>
                    This project was created as an assignment for the Software Engineering course at York College of Pennsylvania. We were tasked with using Java Servlets and JSP webpages.
                </ArticleParagraph>

                <ArticleParagraph>
                    I thoroughly enjoyed collaborating on this project with a team of three other computer science students: Emmet Larson, Zach Cox, and Emily Culp. In the video below, I showcase the project and specify the parts that I developed!
                </ArticleParagraph>

                <ArticleVideo 
                    youtubeUrl="https://www.youtube.com/watch?v=QwLmXYgslMw"
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

            <ArticleSection variant="dark">
                <div className="text-center">
                    {project?.placement && (
                        <p className="text-2xl sm:text-4xl font-bold text-white mb-8">{project.placement}</p>
                    )}
                    <a 
                        href="https://github.com/emmetl913/RevMetrixUI-Database" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block text-xs sm:text-2xl bg-blue-500 hover:bg-blue-700 duration-200 px-8 py-4 transform hover:scale-105 rounded-lg text-white font-bold"
                    >
                        GitHub Page!
                    </a>
                </div>
            </ArticleSection>
        </ArticleLayout>
    );
}
export default RevMetrix;
