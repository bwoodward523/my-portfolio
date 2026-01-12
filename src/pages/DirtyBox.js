import React from "react";
import hacksLogo from '../images/hacks.jpg';
import dirtyboxImage from '../images/dirtyboximage1.jpg';
import ArticleLayout, { ArticleHeader, ArticleSection, ArticleParagraph, ArticleFigure } from '../components/ArticleLayout'

function DirtyBox() {
    return (
        <ArticleLayout>
            <ArticleHeader 
                logo={hacksLogo}
                logoAlt="YCPHacks logo"
                title="DirtyBox"
                subtitle="YCPHacks Fall 2024"
            />

            <ArticleSection variant="light">
                <ArticleParagraph>
                    Over the weekend of November 2nd, I had the chance to participate in YCP's hackathon, YCPHacks. Our team developed the "Dirty Box," a Raspberry Pi project disguised as a USB device capable of simulating keyboard input to control any Windows 11 computer.
                </ArticleParagraph>

                <ArticleFigure 
                    src={dirtyboxImage}
                    alt="DirtyBox project image"
                    caption="The Dirty Box device - a Raspberry Pi Zero 2w disguised as a USB device"
                />

                <ArticleParagraph>
                    Using the Pi Zero 2w's ability to emulate a USB device, we sent artificial keystrokes to the target computer. This allowed us to open the command prompt and execute Python scripts, which we streamlined from hundreds of lines down to a single command. The device's functionality is limited only by the capabilities of a standard keyboard.
                </ArticleParagraph>

                <ArticleParagraph>
                    After overcoming numerous hurdles and with minimal online documentation, we managed to secure second place in the Hardware category!
                </ArticleParagraph>
            </ArticleSection>

            <ArticleSection variant="dark">
                <ArticleParagraph variant="dark">
                    A special thanks to Zach, Emmet, and Caleb for their extraordinary efforts and dedication.
                </ArticleParagraph>

                <ArticleParagraph variant="dark">
                    For more information about this project, check out the{' '}
                    <a 
                        href="https://www.linkedin.com/posts/brandon-woodward-9a6468264_over-the-weekend-of-november-2nd-i-had-the-activity-7262188939971551232-JwnO/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDaEY4B7370PeAtPibAg_lTAONE231DZH0" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 underline"
                    >
                        LinkedIn post about this project
                    </a>
                    {' '}and the{' '}
                    <a 
                        href="https://lnkd.in/e6ntpJmD" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 underline"
                    >
                        GitHub Repository
                    </a>
                    .
                </ArticleParagraph>
            </ArticleSection>
        </ArticleLayout>
    );
}

export default DirtyBox;
