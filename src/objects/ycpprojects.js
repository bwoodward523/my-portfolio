import opengl from '../images/OpenGLhousecover.png'
import kratz from '../images/Kratz.png'
import revIcon from '../images/RevIcon.png'
// import ycpIcon from '../images/ycpicon.png'
import revMetrixCover from '../images/RevMetrixCap.png'
import amazingcover from '../images/AMAZING.png'
import rfidcover from '../images/carsonbrandon.jpg'
const projects = [
  
    {
      id: 1,
      title: "RevMetrix: Capstone",
      date: "Spring 2025 - Fall 2025",
      smalldesc: "Capstone project placeholder.",
      description: "Capstone project placeholder.",
      image: revMetrixCover,
      link: "/revmetrix-capstone"
    },
    {
      id: 6,
      title: "RFID Cloner",
      date: "Spring 2025",
      smalldesc: "Using a Raspberry Pi, Proxmark3, battery pack, and a 3D printed case, I worked with Carson to create a RFID cloner capable of cloning all of YCPs RFID cards.",
      description: "Using a Raspberry Pi, Proxmark3, battery pack, and a 3D printed case, I worked with Carson to create a RFID cloner capable of cloning all of YCPs RFID cards.",
      image: rfidcover,
      link: "/rfid-cloner",
    },
    {
      id: 2,
      title: "Kratz!",
      date: "Spring 2024",
      itchio: "https://ravenfight.itch.io/kratz", // use kratz link but other projects don't get a link
      description: "Software Engineering, indepenent project. In a mix of all your favorite endless runners, become responsible for the life of a rat. Try not to blow yourself up! Survive as long as you can!",
      image: kratz, 
      smalldesc: "In Software Engineering CS320, as an independent project, I took on this project to learn Unreal Engine 5 in order to prepare for my Firaxis Games internship. I also learned character modeling, rigging, and animating in Blender and adjusted to Unreal Engine's Blueprint coding system.",
      link: '/kratz',
      notes: "I 3D modeled, textured, rigged, and animated the rat for gameplay. I also created the music and sound effects. I used default textures from UE5 for the sewer.",
      goal: "Developing Kratz gave me the opportunity to explore the fundamentals and tools of Unreal Engine 5. With no prior experience, I delved into systems like the Niagara water system and found myself fully immersed in the development process. This project also provided invaluable preparation for my summer internship with Firaxis, allowing me to familiarize myself with the engine.",
      role: "As part of a sophomore software engineering class, I was tasked with creating an individual project of my choosing, which I used as an opportunity to develop my first Unreal Engine 5 project."
    },
    {
      id: 3,
      title: "MazeAlgorithm Visualization OpenGL",
      date: "Spring 2025",
      smalldesc: "[Description to be added]",
      description: "[Description to be added]",
      image: amazingcover,
      link: "/maze-algorithm",
      goal: "[Goal to be added]",
      role: "[Role to be added]"
    },
    {

      id: 4,
      smalldesc: "Developed with Java, JavaScript, HTML, MySQL, and Servlets in the Eclipse IDE. I gained proficiency in GitHub, collaboration, and determination to meet deadlines.",
      title: "RevMetrix: Software Engineering Course",
      date: "Spring 2024",
      description: "A staff of bowlers thirsty for statistics, a website created to portray their wishes.",
      image: revIcon,
      link: "/revmetrix",
      goal: "In addition to collaborating with a team under tight time constraints, one of the most significant benefits I gained from this project was increased familiarity and success with coding beyond game development.",
      role: "My primary role in this project was to develop the bowling ball arsenal, as well as the game and scoring system. However, to ensure all aspects of the assignment were completed on time, I took on additional responsibilities, stepping in to implement the scoring page and support another aspiring developer."
    },
    {
      id: 5,
      title: "OpenGL House",
      date: "Fall 2024",
      smalldesc: "Created with OpenGL and C++, I created a single-room home featuring 3D models I made, animations, and a mirror!",
      description: "Created with OpenGL and C++, I created a single-room home featuring 3D models I made, animations, and a mirror!",
      image: opengl,
      link: "/house"
    },
    

  ];
  
export default projects;