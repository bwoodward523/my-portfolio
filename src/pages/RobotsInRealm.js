import React from "react";
import rotmgLogo from '../images/rotmgrotmg.png';
import ArticleLayout, { ArticleHeader, ArticleSection, ArticleParagraph, ArticleVideo } from '../components/ArticleLayout'

function RobotsInRealm() {
    return (
        <ArticleLayout>
            <ArticleHeader 
                logo={rotmgLogo}
                logoAlt="Robots in Realm logo"
                title="Robots in Realm: Machine Learning"
                subtitle="Machine Learning Project"
            />

            <ArticleSection variant="light">
                <ArticleParagraph>
                    This project has evolved into my independent study for the Spring 2026 semester. A full video documenting the entire project come the end of the semester.
                </ArticleParagraph>

                <ArticleVideo 
                    youtubeUrl="https://www.youtube.com/watch?v=lsaFr3EqMWU"
                    caption="See a tour of the project's current progress!"
                />

                <ArticleVideo 
                    youtubeUrl="https://www.youtube.com/watch?v=0N-2py5A6SU"
                    caption="Early documentation of the creation of hundreds of bots."
                />
            </ArticleSection>
        </ArticleLayout>
    );
}

export default RobotsInRealm;
