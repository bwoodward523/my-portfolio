import React from "react";
import revMetrixCap from '../images/bowlingball.png';
import revMetrixCapstone from '../images/Capstone.png';
import ArticleLayout, { ArticleHeader, ArticleSection, ArticleParagraph, ArticleFigure } from '../components/ArticleLayout'

function RevMetrixCapstone() {
    return (
        <ArticleLayout>
            <ArticleHeader 
                logo={revMetrixCap}
                logoAlt="RevMetrix Capstone project logo"
                title="RevMetrix: Capstone"
                subtitle="York College of Pennsylvania | Spring 2025 - Fall 2025"
            />

            <ArticleSection variant="light">
                <ArticleParagraph>
                    The RevMetrix capstone is a multidisciplinary project that promotes collaboration between all team members. During my second semester of contribution, the project boasted 15 members. I led a subteam fondly named "Team Pi" which consisted of two computer science students - including myself - and two computer engineers, and one electrical engineer.
                </ArticleParagraph>
                <ArticleFigure 
                    src={revMetrixCapstone}
                    alt="RevMetrix Capstone team"
                    caption="RevMetrix Capstone team"
                />
            </ArticleSection>

            <ArticleSection variant="dark">
                <ArticleParagraph variant="dark">
                    This experience provided me the opportunity to understand my role as a leader while simultaneously being a technical contributor. I learned that there are three main contributors to succeeding in this role.
                </ArticleParagraph>

                <ArticleParagraph variant="dark">
                    Leading by example holds great power and will compel others to do the same.
                </ArticleParagraph>

                <ArticleParagraph variant="dark">
                    Creating resources for organization, task management, and communication helps the team avoid stepping on each other's toes.
                </ArticleParagraph>

                <ArticleParagraph variant="dark">
                    You must maintain the full project overview and ensure that everyone is contributing what they can. Yet you must be willing to adjust the plan to compensate for unexpected levels of contribution, whether good or bad.
                </ArticleParagraph>
            </ArticleSection>

            <ArticleSection variant="light">
                <ArticleParagraph>
                    My technical contributions include, but were not limited to:
                    <ul>
                        <br></br>
                        <li>&bull; Compiling the source code for MetaWear's Python library. A process much more arduous than anticipated. The entire process is documented with a tutorial created inside the repositories <a href="https://github.com/YCP-Rev-Metrix/BallSpinner-Controller-v2/blob/main/README.md" className="underline text-blue-400"> README  </a> </li>
                        <br></br>
                        <li>&bull; Refactoring then expanding a TCP networking protocol for applications to communicate with each other</li>
                        <br></br>
                        <li>&bull; End to end data collection; from creating the data structures, automatically entering their data, and uploading it all to a Cloud API. Then pulling back down data from the Cloud API and being able to load all data structures properly.</li>
                        <br></br>
                    </ul>
                </ArticleParagraph>
            </ArticleSection>
        </ArticleLayout>
    );
}

export default RevMetrixCapstone;
