import React from "react";
import projects from '../objects/ycpprojects';
import '../pages/Project1.css'
import thumb from '../images/kratzThumb.webp'

function Kratz() {
    return(
        <div>
            <div className="bg-gray-100 h-auto flex flex-col items-center justify-start p-10">
                <h1 className="text-4xl font-bold text-black">{projects[0].title}</h1>
                <p className="text-center mt-4 text-xl text-gray-800 pb-8" >"Kratz is a fast-paced action platformer and endless runner, inspired by Subway Surfers and Temple Run. It features an online leaderboard, cheese dashes, and satisfying chomp sounds</p>
                <a href="https://www.youtube.com/watch?v=iNYkZy9Sbs4" target="_blank" rel="noopener noreferrer" class="text-center inline-block px-6 pb-3 py-3 mt-4 text-lg font-bold text-white bg-red-600 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-red-700">
  See a tour of the project on YouTube!
  <img src={thumb} alt="RevMetrix Video Thumbnail" class="w-full"  />
</a>
            </div>
          
            <p className="bg-gray-400 text-center pt-20 text-5xl font-bold text-white">Role & Goal</p>
            <div className="flex flex-col sm:flex-row text-center">
                <div className="bg-gray-400 p-4 sm:p-10 text-2xl sm:text-3xl font-bold flex justify-center text-white">
                    {projects[0].role}
                </div>
                <p className="bg-gray-400 p-4 sm:p-10 text-2xl sm:text-3xl font-bold flex justify-center text-white">
                    {projects[0].goal}
                </p>
            </div>

            <div className="p-4 sm:p-20 text-5xl font-bold bg-gray-900 text-white flex flex-col">
                <p className="text-center pb-5">{projects[0].placement}</p>
                <a href={projects[0].itchio}  target="_blank" rel="noopener noreferrer" className="text-xl sm:text-5xl text-center bg-blue-500 hover:bg-blue-900 duration-200 px-16 py-4 transform hover:scale-105">Itch.io Page!</a>
                <p className="text-center pt-16 text-xl" >In hindsight, there are many things I would do differently if I were tackling this project again. However, what seemed like mistakes at one point, now seem like valuable lessons. I developed this game entirely using the Blueprint feature in UE5, which due to inexperience, led to the project becoming somewhat disorganized. However this helped me learn and prepare for further development in UE5 during my Firaxis internship. I learned how not to organize a project, and I gained a solid understanding of the basics of Unreal Engine 5's interface. During the Firaxis internship, I was able to introduce C++, increase project complexity, and increase readability/organization simultaneously. Despite some bugs and a lack of polish, I am very pleased with Kratz! and with my ability to adapt to the Unreal Engine 5 development and workflow environment.
                </p>
                <p className="text-center text-xl pt-16">&bull;&nbsp;{projects[0].notes}</p>
            </div>
            
        </div>
    );
}
export default Kratz;