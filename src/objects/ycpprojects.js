import opengl from '../images/OpenGLhousecover.png'
import kratz from '../images/Kratz.png'
import revIcon from '../images/RevIcon.png'

const projects = [
    {
      id: 1,
      title: "Kratz!",
      date: "Created during the Spring Semester of my Sophomore Year 2024",
      itchio: "https://ravenfight.itch.io/kratz",// use kratz link but other projects dont get a link
      description: "In a mix of all your favorite endless runners, become responsible for the life of a rat. Try not to blow yourself up! Survive as long as you can!",
      image: kratz, 
      link: '/kratz',
      notes: "Almost all the assets in this game were made by me except for the sewer textures, I 3D modeled, textured, rigged, and animated the rat for gameplay and created this project individually",
      goal: "The goal of Kratz was to learn the ropes of Unreal Engine 5 to prepare for my internship with Firaxis. I also really wanted to get back into creating games. In what was two months I went from never using Unreal Engine 5 before to having an interesting endless runner game!",
      role: "In my software engineering class I was tasked to create an individual project about anything I wanted to, so I chose to learn Unreal Engine 5 by making a game in it!"
    },
    {
      id:2,
      title:"RevMetrix",
      date:"Created during the Spring Semester of my Sophomore Year 2024",
      description: "A staff of bowlers thirsty for statistics, a website created to demonstrate their wishes.",
      image: revIcon,
      link: "/revmetrix",
      goal: "With this project I wanted to prove to myself that my coding abilities were not specific to game development, so I set out to prove to myself that I could work with a team and find excellency",
      role: "My role in this project was to develop the bowling ball arsenal and the game logic. This later developed into implementing the scoring page due to another developer being unable to accomplish the task"
      
    },
    {
      id:3,
      title: "OpenGL House",
      date: "Created during the Fall Semester of my Sophomore Year 2024",
      description: "Created with OpenGL and C++, I created a single room home featuring 3D models I made, animations, and a mirror!",
      image: opengl,
      link: "/house"
    }
  ];
  
  export default projects;