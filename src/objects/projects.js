//import img1 from '../images/img1.jpg'
import robotimg from '../images/robotcover.jpg'
import ptmcover from '../images/ptmcover.png'
import slimecover from '../images/slimecover.png'
import sporocover from '../images/sporocover.png'
const projects = [
    {
      submissiondate: "Submitted on August 18th to GMTK Game Jam 2024",
      id: 1,
      placement: "Out of 7,615 entries, we ranked #1557 in enjoyment and #1737 overall!",
      title: "The Robot Who Baked The World",
      itchio: "https://itch.io/jam/gmtk-2024/rate/2910946",
      smalldesc: "In this project I took more of a backseat role and focused on uplifting my teammates by picking up loose ends and making a few of the minigames.",
      description: "A lonely robot, born to bake. An infinite quest for the ultimate cake. Only destruction in its wake...",
      image: robotimg, 
      link: '/robotgame',
      goal: "The goal of this game was to create a successful submission to GMTK Jam 2024! As a team we wanted to prove that with greater competition, our skills were just as potent!",
      role: "In this project I focused on supporting my teammates and picking up as many loose ends as I could. I was just wrapping a long sprint at the end of the Firaxis internship combined with the end of a two-week game jam!"
    },
    {
      submissiondate: "Submitted on August 12th to LOWREZJAM 2024",
      id: 2,
      title: "Peace to the Meadow",
      smalldesc: "In this game I created the AI for the animals, these creatures had to interact with all the systems in the game that were being developed by my teammates. It took a lot of coordination and communication to integrate all the moving parts we were working on.",
      itchio: "https://itch.io/jam/lowrezjam-2024/rate/2893959",
      placement: "Out of 258 entries, we ranked #16 in audio and #58 overall!",
      description: "You have awoken into a world of greenery. Where animals and plants are meant to flourish. But disaster has struck...",
      image: ptmcover,
      link: '/peacetothemeadow',
      goal: "This game jam restricted developers to a 64x64 pixel resolution! Working in a team of 6 developers, we banded together to create a strategy game in just two weeks!",
      role: "In this game I developed the animals and all of their behaviors. In order to do so, I collaborated with the other engineers to connect the animals to the other mechanics in the game; for example, eating plants and attacking spirits."
    },
    {
      submissiondate: "Submitted on July 23rd, 2024 to ScoreSpace Jam #30",
      id: 3,
      title: "Slime Wants Treasure",
      itchio: "https://itch.io/jam/scorejam30/rate/2792114",
      smalldesc: "In this project I created my own state machine within the Godot engine in order to create flexible animations for the character movement controller.",
      placement: "Out of 129 entries, we ranked #31 in gameplay",
      description: "Play as an adventurous little slime who just wants to collect some treasure! Compete to see how fast you can get the treasure and get out!",
      goal: "This was a spontaneous project that began within 6 hours of the submission time. Initially it was not intended to be a game jam submission. With less time than other competitors and an incomplete project, we decided to submit it to see what we accomplished. Afterwards we continued to develop the game as we were impressed with our submission results.",
      role: "In this game I created the character controller and all of its visual aspects. Once the level creation system was implemented, I utilized it to create some levels for the game!",
      image: slimecover,
      link: '/slimegame'
    },
    {
      id: 4,
      submissiondate: "Submitted on May 17th, 2024 to Bullet Hell Jam 5",
      placement: "Out of 366 entries, we ranked #50 in fun and #52 overall!",
      smalldesc: "In Sporo, I developed the player movement and shooting. I also developed the AI for the enemies and the boss. I also developed a dynamic, customizable gun base object allowing us to integrate tons of weapons into our game.",
      title: "Sporo",
      itchio: "https://itch.io/jam/bullet-hell-v/rate/2719776?",
      goal: "This was my first ever game jam! Emmet Larson, Sporo's codeveloper, and I had finally committed to participating in a game jam! Our only goal was to create something fun and interesting in the two-week time limit.",
      role: "In this game I developed the character movement, combat, weapon system, enemy AI, and boss fight! There were lots of things that could have been done better, and this was a fantastic learning experience. It really helped improve my development skills for future jams I participated in.",
      description: "The once peaceful Sporest is under siege by a mysterious dark force that has corrupted its inhabitants. You play as Sporo, a brave and sentient mushroom. Your mission is to fight through the corrupted creatures, defeat the dark wraith, and restore peace to the Sporest.",
      image: sporocover,
      link: '/sporo'
    }
  ];
  
export default projects;
