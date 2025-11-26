import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaGitAlt, FaLaravel, FaPhp, FaBootstrap, FaDocker } from 'react-icons/fa';
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { SiNestjs, SiNodedotjs, SiJsonwebtokens, SiExpress, SiEjs, SiRedux, SiJira, SiMongodb, SiTailwindcss, SiSocketdotio, SiTypescript, SiJest, SiFigma } from 'react-icons/si';



export const projects = [

  {
    name: 'RegiSport',
    description: 'Full sports-event management system with real-time registration, team handling, and admin dashboards. Built with a modular backend (NestJS + Mongo) using clean services/repositories and a React/Tailwind frontend. Includes event creation, participant validation, and automated scheduling logic.',
    technologies: ['NodeJs', 'Mongo', 'React', 'Nest', 'Tailwind'],
    link: 'https://github.com/mohammed-rharbi/RegiSport',
    demo: 'https://yourdemourl.com/mongrandtaxi',
    image: '/projectsPics/sporti-1.webp',
    hasDemo: false
  },

  {
    name: 'CinéManager',
    description: 'Complete cinema management system with movie scheduling, reservations, seat selection, and admin tools. Backend built with Node/Express + Mongo using services and repositories. Frontend in React/Tailwind with real-time seat updates, JWT auth, email confirmations, and video-streaming module for VOD.',
    technologies: ['NodeJs', 'Mongo', 'React', 'Tailwind', 'Express'],
    link: 'https://github.com/mohammed-rharbi/cinema_manger',
    demo: 'https://yourdemourl.com/mongrandtaxi',
    image: '/projectsPics/cin.webp',
    hasDemo: false
  },

  {
    name: 'My Gym',
    description: 'platform for gym entusiast to manage their gym membership and access to the gym facilities and classes and also to book classes and facilities ',
    technologies: ['JavaScript', 'SQL', 'Laravel', 'React', 'Tailwind'],
    link: 'https://github.com/mohammed-rharbi/MY-GYM',
    demo: 'https://yourdemourl.com/mongrandtaxi',
    image: '/projectsPics/myGym.webp',
    hasDemo: false
  },

  {
    name: 'Evento',
    description: 'Evento is creating a platform for event management and reservations. Users can book and generate tickets, while organizers manage their events.',
    technologies: ['SQL', 'JavaScript', 'Laravel', 'PHP', 'Tailwind'],
    link: 'https://github.com/mohammed-rharbi/evento-app',
    demo: 'https://yourdemourl.com/evento',
    image: '/projectsPics/Evento.webp',
    hasDemo: false
  },

  {
    name: 'MonGrandTaxi',
    description: 'MonGrandTaxi is a user-friendly platform enabling users to find available drivers and drivers to publish their availability',
    technologies: ['JavaScript', 'SQL', 'Laravel', 'Tailwind', 'PHP'],
    link: 'https://github.com/mohammed-rharbi/My-Cab',
    demo: 'https://yourdemourl.com/mongrandtaxi',
    image: '/projectsPics/electro-maroc-17-65c0988f5116d694298253.webp',
    hasDemo: false
  },

  {
    name: 'Cinematy SIRH',
    description: 'Cinematy SIRH is a system that facilitate the management of employees, applications, calls for tenders, and includes advanced features such as OCR detection for automatic document processing.',
    technologies: ['NodeJs', 'Mongo', 'Next', 'Nest', 'Tailwind'],
    link: 'https://github.com/mohammed-rharbi/EmployeeManger',
    demo: 'https://yourdemourl.com/mongrandtaxi',
    image: '/projectsPics/RH.webp',
    hasDemo: false
  },

  {
    name: 'Instant Communication Service',
    description: 'Instant Communication Service is a platform for instant communication between users with real-time notifications and messaging features also with video and audio calls',
    technologies: ['NodeJs', 'Mongo', 'React', 'Nest', 'Bootstrap'],
    link: 'https://github.com/mohammed-rharbi/JScommunication',
    demo: 'https://yourdemourl.com/mongrandtaxi',
    image: '/projectsPics/WATCH.webp',
    hasDemo: false
  },

  {
    name: 'Watch Together',
    description: 'watch together is a platform for watching movies and series together with your friends and family in real-time and with a chat feature',
    technologies: ['NodeJs', 'Mongo', 'React', 'Nest', 'Socket', 'Bootstrap'],
    link: 'https://github.com/mohammed-rharbi/AsyncPlay',
    demo: 'https://yourdemourl.com/mongrandtaxi',
    image: '/projectsPics/COM.webp',
    hasDemo: false
  },

  {
    name: 'Smart Exam',
    description: 'is an application intended for educational establishments, training centers, and companies wishing to assess the skills of their learners or employees.',
    technologies: ['NodeJs', 'SQL', 'React', 'EJS', 'Bootstrap'],
    link: 'https://github.com/mohammed-rharbi/JSSmartExam',
    demo: 'https://yourdemourl.com/mongrandtaxi',
    image: '/projectsPics/smart.webp',
    hasDemo: false
  },

  {
    name: 'Wiki To',
    description: 'Wiki To is an efficient content management system, combined with a front office, to provide an exceptional user experience.',
    technologies: ['JavaScript', 'SQL', 'PHP', 'Bootstrap'],
    link: 'https://github.com/mohammed-rharbi/WIKI_TO',
    demo: 'https://yourdemourl.com/mongrandtaxi',
    image: '/projectsPics/Wiki.webp',
    hasDemo: false
  },

  {
    name: 'Recipe Hub',
    description: 'Recipe Hub is a platform for sharing and discovering recipes with a community of food enthusiasts.',
    technologies: ['JavaScript', 'SQL', 'Laravel', 'Bootstrap'],
    link: 'https://github.com/mohammed-rharbi/Recipes_Hub',
    demo: 'https://yourdemourl.com/mongrandtaxi',
    image: '/projectsPics/recpies.webp',
    hasDemo: false
  },

  {
    name: 'Digital Menu Board',
    description: 'Digital Menu is a SaaS Platform that offer an intuitive experience to restaurant owners. Create, customize and share your digital menus with ease, while benefiting from secure authentication, real-time email notifications and optimized performance.',
    technologies: ['JavaScript', 'React', 'SQL', 'Laravel', 'Bootstrap'],
    link: 'https://github.com/mohammed-rharbi/Digital-Menu',
    demo: 'https://yourdemourl.com/mongrandtaxi',
    image: '/projectsPics/digitalMenu.webp',
    hasDemo: false
  },

  {
    name: 'Smart Travel',
    description: 'smart travel is a revolutionary travel startup dedicated to simplifying the bus booking process and elevating the entire travel experience.',
    technologies: ['JavaScript', 'SQL', 'PHP', 'Bootstrap'],
    link: 'https://github.com/mohammed-rharbi/SmartTravel',
    demo: 'https://yourdemourl.com/mongrandtaxi',
    image: '/projectsPics/smart-Travel.webp',
    hasDemo: false
  },

  {
    name: 'Digital Bizcard',
    description: 'platform for digital business card management using Laravel Sanctum for authentication and access policies to allow users to create, edit and delete their own business cards',
    technologies: ['JavaScript', 'SQL', 'Laravel', 'Bootstrap'],
    link: 'https://github.com/mohammed-rharbi/bizcard',
    demo: 'https://yourdemourl.com/mongrandtaxi',
    image: '/projectsPics/bizcard.webp',
    hasDemo: false
  },

  {
    name: 'Book Verse',
    description: 'platform that  allow users to quickly access information about their favorite books',
    technologies: ['JavaScript', 'SQL', 'Laravel', 'React'],
    link: 'https://github.com/mohammed-rharbi/BookVerse',
    demo: 'https://yourdemourl.com/mongrandtaxi',
    image: '/projectsPics/BookVerse.webp',
    hasDemo: false
  },

  {
    name: 'Fast Food APP',
    description: 'Fast Food APP is a website for a fast food resturant that showcase the menu and the resturant culture',
    technologies: ['HTML', 'CSS', 'JavaScript',],
    link: 'https://github.com/mohammed-rharbi/landingpp',
    demo: 'https://mohammed-rharbi.github.io/landingpp/index.html',
    image: '/projectsPics/fastFood.webp',
    hasDemo: true
  },

  {
    name: 'Electro Nacer',
    description: 'Electro Nacer is a platform and a website for a company that sells electrical supplies and appliances',
    technologies: ['JavaScript', 'SQL', 'PHP', 'HTML', 'React'],
    link: 'https://github.com/mohammed-rharbi/ELECTRO-NACER',
    demo: 'https://yourdemourl.com/mongrandtaxi',
    image: '/projectsPics/NACER.webp',
    hasDemo: false
  },

  {
    name: 'Fashion Hub',
    description: 'FashionHub is more than just a clothing website. It is a place where fashion enthusiasts can explore the latest trends and styles in an engaging and inspiring way',

    technologies: ['JavaScript', 'HTML', 'css'],
    link: 'https://github.com/mohammed-rharbi/fashion-hub',
    demo: 'https://mohammed-rharbi.github.io/fashion-hub/',
    image: '/projectsPics/FushionHub.webp',
    hasDemo: true

  },

  {
    name: 'Galerie Artistique',
    description: 'Galerie Artistique is a platform for artists to showcase their work and for art enthusiasts to explore and purchase art pieces',
    technologies: ['JavaScript', 'HTML', 'css'],
    link: 'https://github.com/mohammed-rharbi/galerie-artistique',
    demo: 'https://mohammed-rharbi.github.io/galerie-artistique/index.html',
    image: '/projectsPics/ArtAgency.webp',
    hasDemo: true
  },

];

export const skills = [
  { name: 'JavaScript', icon: <FaJs />, level: 'Intermediate' },
  { name: 'React', icon: <FaReact />, level: 'Intermediate' },
  { name: 'HTML', icon: <FaHtml5 />, level: 'Advanced' },
  { name: 'CSS', icon: <FaCss3Alt />, level: 'Advanced' },
  { name: 'SQL', icon: <FaDatabase />, level: 'Intermediate' },
  { name: 'Git', icon: <FaGitAlt />, level: 'Advanced' },
  { name: 'Laravel', icon: <FaLaravel />, level: 'Intermediate' },
  { name: 'PHP', icon: <FaPhp />, level: 'Intermediate' },
  { name: 'Bootstrap', icon: <FaBootstrap />, level: 'Advanced' },
  { name: 'Docker', icon: <FaDocker />, level: 'Intermediate' },
  { name: 'Next.js', icon: <TbBrandNextjs />, level: 'Intermediate' },
  { name: 'Node.js', icon: <SiNodedotjs />, level: 'Intermediate' },
  { name: 'NestJS', icon: <SiNestjs />, level: 'Intermediate' },
  { name: 'JWT', icon: <SiJsonwebtokens />, level: 'Intermediate' },
  { name: 'Express', icon: <SiExpress />, level: 'Intermediate' },
  { name: 'EJS', icon: <SiEjs />, level: 'Intermediate' },
  { name: 'Redux', icon: <SiRedux />, level: 'Intermediate' },
  { name: 'Jira', icon: <SiJira />, level: 'Intermediate' },
  { name: 'MongoDb', icon: <SiMongodb />, level: 'Intermediate' },
  { name: 'Tailwind', icon: <SiTailwindcss />, level: 'Intermediate' },
  { name: 'Socket.io', icon: <SiSocketdotio />, level: 'Intermediate' },
  { name: 'TypeScript', icon: <SiTypescript />, level: 'Intermediate' },
  { name: 'Jest', icon: <SiJest />, level: 'Intermediate' },
  { name: 'React Native', icon: <TbBrandReactNative />, level: 'Intermediate' },
  { name: 'Figma', icon: <SiFigma />, level: 'Intermediate' },

];