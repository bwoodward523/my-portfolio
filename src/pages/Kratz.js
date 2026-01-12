import React from "react";
import projects from '../objects/ycpprojects';
import ArticleLayout, { ArticleHeader, ArticleSection, ArticleParagraph, ArticleVideo } from '../components/ArticleLayout';

function Kratz() {
    const project = projects.find(p => p.id === 2);
    
    return(
        <ArticleLayout>
            <ArticleHeader 
                title={project?.title || "Kratz!"}
                subtitle={project?.description || "Kratz is a fast-paced action platformer and endless runner, inspired by Subway Surfers and Temple Run. It features an online leaderboard, cheese dashes, and satisfying chomp sounds"}
            />

            <ArticleSection variant="light">
                <ArticleParagraph>
                    "Kratz is a fast-paced action platformer and endless runner, inspired by Subway Surfers and Temple Run. It features an online leaderboard, cheese dashes, and satisfying chomp sounds"
                </ArticleParagraph>

                <ArticleVideo 
                    youtubeUrl="https://www.youtube.com/watch?v=iNYkZy9Sbs4"
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
                    {project?.itchio && (
                        <a 
                            href={project.itchio} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-block text-xs sm:text-2xl bg-blue-500 hover:bg-blue-700 duration-200 px-8 py-4 transform hover:scale-105 rounded-lg text-white font-bold mb-8"
                        >
                            Itch.io Page!
                        </a>
                    )}
                    <ArticleParagraph variant="dark">
                        In hindsight, there are many things I would do differently if I were tackling this project again. However, what seemed like mistakes at one point, now seem like valuable lessons. I developed this game entirely using the Blueprint feature in UE5, which due to inexperience, led to the project becoming somewhat disorganized. However this helped me learn and prepare for further development in UE5 during my Firaxis internship. I learned how not to organize a project, and I gained a solid understanding of the basics of Unreal Engine 5's interface. During the Firaxis internship, I was able to introduce C++, increase project complexity, and increase readability/organization simultaneously. Despite some bugs and a lack of polish, I am very pleased with Kratz! and with my ability to adapt to the Unreal Engine 5 development and workflow environment.
                    </ArticleParagraph>
                    {project?.notes && (
                        <ArticleParagraph variant="dark">
                            &bull;&nbsp;{project.notes}
                        </ArticleParagraph>
                    )}
                </div>
            </ArticleSection>
        </ArticleLayout>
    );
}
export default Kratz;
