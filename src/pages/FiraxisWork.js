import React from "react";
import img1 from "../images/InternsFiraxisHappy.jpg";
import img2 from "../images/HappySethBrandonFiraxis.jpg";
import firaxislogo from "../images/firaxis.png";
import ArticleLayout, { ArticleHeader, ArticleSection, ArticleParagraph, ArticleFigure } from '../components/ArticleLayout'

function FiraxisWork() {
    return (
        <ArticleLayout>
            <ArticleHeader 
                logo={firaxislogo}
                logoAlt="Firaxis logo"
                title="Engineering Intern"
                subtitle="Sparks, MD"
            />

            <ArticleSection variant="light">
                <ArticleParagraph>
                    At Firaxis Games,I took the lead in a title called Callisto, it is a multiplayer party game using Unreal Engine 5 and C++. I was responsible for developing the networking and game framework. Meaning I created the game loop, the basic multiplayer functionalities, most of the UI, the basic environment and some fun mechanics.
                </ArticleParagraph>

                <ArticleParagraph>
                    Throughout this process, I honed my teamwork skills by collaborating closely with interns, mentors, and employees from various specializations.
                </ArticleParagraph>

                <ArticleFigure 
                    src={img2}
                    alt="Brandon Woodward with colleagues at Firaxis"
                    caption="Me posing with Seth Davis during the internship graduation ceremony."
                />
            </ArticleSection>

            <ArticleSection variant="dark">
                <ArticleParagraph variant="dark">
                    My eagerness to learn from my coworkers allowed me to quickly refine my abilities.
                </ArticleParagraph>

                <ArticleParagraph variant="dark">
                    Working alongside my fellow interns, we supported each other and proved a formidable development team.
                </ArticleParagraph>

                <ArticleParagraph variant="dark">
                    In addition to the aforementioned, I adapted to an existing codebase, and I implemented new features for an ongoing project.
                </ArticleParagraph>

                <ArticleFigure 
                    src={img1}
                    alt="Firaxis interns together"
                    caption="The Firaxis intern team at the graduation ceremony."
                    variant="dark"
                />
            </ArticleSection>
        </ArticleLayout>
    );
}
export default FiraxisWork;