import React from "react";
import projects from '../objects/projects';
import '../pages/Project1.css'


function Project1() {
    return(

        <div className="robotbg min-h-screen bg-gray-100 flex flex-col items-center justify-start p-10">
            <h1 className="text-4xl font-bold text-blue-600">{projects[0].title}</h1>
            <p className="mt-4 text-gray-100" >{projects[0].description}</p>
            {<iframe title="robot" frameborder="0" src="https://itch.io/embed-upload/11249606?color=333333" allowfullscreen="" width="960" height="660" >
                <a href="https://edon-games.itch.io/the-robot-who-baked-the-world">Play The Robot Who Baked The World on itch.io</a>
            </iframe>}
        </div>
    );
}
export default Project1;