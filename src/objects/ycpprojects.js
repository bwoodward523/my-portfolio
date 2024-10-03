import opengl from '../images/OpenGLhousecover.png'
import kratz from '../images/Kratz.png'
import revIcon from '../images/RevIcon.png'

const projects = [
    {
      id: 1,
      title: "Kratz!",
      date: "Created during the Spring Semester of my Sophomore Year 2024",
      itchio: "https://ravenfight.itch.io/kratz", // use kratz link but other projects don't get a link
      description: "In a mix of all your favorite endless runners, become responsible for the life of a rat. Try not to blow yourself up! Survive as long as you can!",
      image: kratz, 
      smalldesc: "I took on this project to learn Unreal Engine 5 in order to prepare for my Firaxis Games internship. I also learned character modeling, rigging, and animating in Blender and adjusted to Unreal Engine's Blueprint coding system.",
      link: '/kratz',
      notes: "I 3D modeled, textured, rigged, and animated the rat for gameplay. I also created the music and sound effects. I used default textures from UE5 for the sewer.",
      goal: "Developing Kratz gave me the opportunity to explore the fundamentals and tools of Unreal Engine 5. With no prior experience, I delved into systems like the Niagara water system and found myself fully immersed in the development process. This project also provided invaluable preparation for my summer internship with Firaxis, allowing me to familiarize myself with the engine.",
      role: "As part of a sophomore software engineering class, I was tasked with creating an individual project of my choosing, which I used as an opportunity to develop my first Unreal Engine 5 project."
    },
    {
      id: 2,
      smalldesc: "Developed with Java, JavaScript, HTML, MySQL, and Servlets in the Eclipse IDE. I gained proficiency in GitHub, collaboration, and determination to meet deadlines.",
      title: "RevMetrix",
      date: "Created during the Spring Semester of my Sophomore Year 2024",
      description: "A staff of bowlers thirsty for statistics, a website created to portray their wishes.",
      image: revIcon,
      link: "/revmetrix",
      goal: "In addition to collaborating with a team under tight time constraints, one of the most significant benefits I gained from this project was increased familiarity and success with coding beyond game development.",
      role: "My primary role in this project was to develop the bowling ball arsenal, as well as the game and scoring system. However, to ensure all aspects of the assignment were completed on time, I took on additional responsibilities, stepping in to implement the scoring page and support another aspiring developer."
    },
    {
      id: 3,
      title: "OpenGL House",
      date: "Created during the Fall Semester of my Sophomore Year 2024",
      smalldesc: "Created with OpenGL and C++, I created a single-room home featuring 3D models I made, animations, and a mirror!",
      description: "Created with OpenGL and C++, I created a single-room home featuring 3D models I made, animations, and a mirror!",
      image: opengl,
      link: "/house"
    }
  ];
  
export default projects;