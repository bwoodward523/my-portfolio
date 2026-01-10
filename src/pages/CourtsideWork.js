import React from "react";
import courtsidelogo from '../images/courtsidelogo.png'
import scheduleApp from '../images/ScheduleApp.png'
import techStack from '../images/TechStack.png'
import infobeamer from '../images/Infobeamer.png'
import courtsideActivation from '../images/CourtsideActivation.jpg'
import cccumlBlurred from '../images/CCCUMLBlurred.png'
import ArticleLayout, { ArticleHeader, ArticleSection, ArticleParagraph, ArticleFigure } from '../components/ArticleLayout'

function CourtsideWork() {
    return (
        <ArticleLayout>
            <ArticleHeader 
                logo={courtsidelogo}
                logoAlt="Courtside Video Entertainment logo"
                title="Full Stack Engineering Intern"
                subtitle="Philadelphia, PA"
            />

            <ArticleSection variant="light">
                <ArticleParagraph>
                    I am designing and developing the full stack Creative Control Center for this startup. I built out a full UML diagram and designed the database schema for the app which will allow users to manage their assets, schedule game playlists, execute playlists in real time, control their registered devices, and provide admin interfaces.
                </ArticleParagraph>

                <ArticleFigure 
                    src={cccumlBlurred}
                    alt="CCC UML Diagram showing the architecture and relationships of the Creative Control Center"
                    caption="UML diagram illustrating the Creative Control Center architecture and database relationships. Blurred for security reasons."
                    fullWidth={true}
                />

                <ArticleParagraph>
                    Throughout this process, I've been working closely with the founders to understand their vision and translate it into a robust, scalable application architecture.
                </ArticleParagraph>

                <ArticleFigure 
                    src={scheduleApp}
                    alt="Schedule App interface showing playlist scheduling functionality"
                    caption="The scheduling interface allows users to create and manage game playlists with ease."
                />

                <ArticleFigure 
                    src={courtsideActivation}
                    alt="Courtside Activation system showing device control interface"
                    caption="Device activation and control interface for managing registered Courtside devices."
                />
            </ArticleSection>

            <ArticleSection variant="dark">
                <ArticleParagraph variant="dark">
                    This role has provided me with invaluable experience in full-stack development, from database design to frontend implementation.
                </ArticleParagraph>

                <ArticleParagraph variant="dark">
                    Working at a startup has allowed me to take on significant responsibility and see the direct impact of my contributions on the product.
                </ArticleParagraph>

                <ArticleParagraph variant="dark">
                    I've enjoyed the challenge of building a complex system from the ground up and collaborating with a small, dedicated team.
                </ArticleParagraph>

                <ArticleFigure 
                    src={techStack}
                    alt="Technology stack used in the Creative Control Center project"
                    caption="The technology stack powering the Creative Control Center, including modern frontend and backend frameworks."
                    variant="dark"
                />

                <ArticleFigure 
                    src={infobeamer}
                    alt="Infobeamer integration showing content management capabilities"
                    caption="Infobeamer integration demonstrating the content management and display capabilities of the system."
                    variant="dark"
                />
            </ArticleSection>
        </ArticleLayout>
    );
}

export default CourtsideWork;

