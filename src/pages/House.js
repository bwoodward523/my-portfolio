import React from "react";
import projects from '../objects/ycpprojects';
import ArticleLayout, { ArticleHeader, ArticleSection, ArticleParagraph, ArticleVideo } from '../components/ArticleLayout';

function House() {
    const project = projects.find(p => p.id === 5);
    
    return(
        <ArticleLayout>
            <ArticleHeader 
                title={project?.title || "OpenGL House"}
                subtitle={project?.description || "Created with OpenGL and C++, I created a single-room home featuring 3D models I made, animations, and a mirror!"}
            />

            <ArticleSection variant="light">
                <ArticleParagraph>
                    Created using the highly regarded CLion IDE, this one-room house features a spinning fan, light switches, a functioning mirror, beautiful artwork, soda bubbles, and numerous 3D models and textures! The carpet and door utilize normal and bump mapping. All 3D models except for the Christmas Tree were created by me. The holiday spirit was added to make this video a joyful holiday showcase of my work.
                </ArticleParagraph>

                <ArticleVideo 
                    youtubeUrl="https://www.youtube.com/watch?v=LqAAstnDdwg"
                    caption="See a tour of the project on YouTube!"
                />
            </ArticleSection>

            <ArticleSection variant="dark">
                <ArticleParagraph variant="dark">
                    This project truly enlightened me as to just how much effort goes into the overall architecture of a polished game engine. The steps required to add collisions and physics into this world and create an agile game engine appear to be an extremely extensive process!
                </ArticleParagraph>

                <ArticleParagraph variant="dark">
                    This thought process caused me to realize how much I appreciate all of the abstractions that already exist in game engines. Nonetheless, this project really piqued my curiosity when it comes to developing 3D graphics and simulation software from the ground up!
                </ArticleParagraph>
            </ArticleSection>
        </ArticleLayout>
    );
}
export default House;
