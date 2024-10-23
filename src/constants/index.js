import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    java,
    cpp,
    python,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";

  import { AiOutlineCodeSandbox } from "react-icons/ai";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "tech",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "Full Stack Developer",
      icon: mobile,
    },
    {
      title: "Data Scientist",
      icon: creator,
    },
    {
      title: "DevOps Engineer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C ++",
      icon: cpp,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "DreamStudio Model.Earth",
      icon: starbucks,
      iconBg: "#FFFFFF",
      date: "July 2024 - Present",
      points: [
        "Migrated complex search logic from a monolithic system to a distributed microservices architecture handling thousands of requests per day using Java Spring Boot, Docker, Redis, Kubernetes, and AWS.",
        "Implemented automated unit testing, successfully enforcing an 80% code coverage and 100% pass rate.",
        "Established CI/CD pipelines to fetch daily changes from API using GitHub Actions and Docker, reducing deployment times and enhancing release quality.",
        "Identified and resolved numerous critical production bugs showcasing excellent debugging skills."
      ],
    },
    {
      title: "Software Automation Engineer",
      company_name: "Tarpon Health",
      icon: starbucks,
      iconBg: "#FFFFFF",
      date: "April 2023 - June 2024",
      points: [
        "Developed and deployed end-to-end automated workflows using UI Path to streamline repetitive tasks, increasing healthcare system's operational efficiency by 23%.",
        "Designed and implemented RPA bots for automating key business processes, ensuring accuracy and compliance.",
        "Slashed troubleshooting time by 40%, improved code quality, implemented MVC and advanced IDE tools."
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Global Shala",
      icon: starbucks,
      iconBg: "#FFFFFF",
      date: "January 2023 - March 2023",
      points: [
        "Elevated revenue by 11% by managing workflow of a team of 10 members through entire Software development Life Cycle (SDLC) in developing AI chatbots.",
        "Designed and deployed a new feature using React.js, GraphQL and TypeScript, increasing user engagement by 15%.",
        "Yielded productivity improvement, provided technical support through Terraform and AWS (Lambda and EC3) to ensure effective completion of all goals.",
        "Assimilated several project management artifacts - RACI charts, project charter, Risk matrix, work breakdown structure.",
      ],
    },
    {
      title: "Graduate Teaching Assistant",
      company_name: "Illinois Institute of Technology",
      icon: starbucks,
      iconBg: "#FFFFFF",
      date: "January 2023 - April 2024",
      points: [
        "Empowered students to grasp and apply object-oriented programming (OOP) concepts, System Design, and Object Analysis and Design (OOAD) in Java.",
        "Transformed 200+ students into Java wizards, orchestrating a 30% surge in assignment scores through hands-on and engaging instructions.",
        "Spearheaded practical sessions, propelling students to excel in developing, deployment, debugging, and unit testing leading to a 30% decrease in bug rates and a 15% increase in code quality scores."
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Decimal Technolgies",
      icon: starbucks,
      iconBg: "#FFFFFF",
      date: "August 2020 - July 2022",
      points: [
        "Developed high-scale production grade financial (Fintech) web & mobile applications using React, Java Spring Boot, REST APIs and Salesforce as a part of cross-functional software team.",
        "Elevated user experience by 20% through timely delivery of major SaaS project milestones, fixing crucial bugs, and optimizing performance across 4 teams.",
        "Enhanced systems performance by 13% in 8 months, wrote and optimized SQL queries for data retrievals.",
        "Boosted software production by educating freshman regarding cloud and core technology."
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AI-Headshot Generator",
      description:
        " Developed an AI-driven app, orchestrating the training of AI data models for transforming sample images into professional headshots. Integrated secure authentication, with a user-friendly and data-protected experience.",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Leap AI",
          color: "green-text-gradient",
        },
        {
          name: "vercel",
          color: "pink-text-gradient",
        },
        {
          name: "supabase",
          color: "black-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://ai-headshots-gen.vercel.app/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind-css",
          color: "green-text-gradient",
        },
        {
          name: "shadcn-ui",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://jobit-one.vercel.app/",
    },
    {
      name: "Model Earth",
      description:
        "Model Earth is a platform integrates with major e-commerce and shipping systems, aiming to simplify user experience while maximizing positive environmental outcomes.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "jupyter",
          color: "green-text-gradient",
        },
        {
          name: "api",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://model.earth/community/",
    },
    
    // {
    //   name: "Open Foot Print",
    //   description:
    //     "The Open Footprint Project by Model Earth focuses on creating Environmental Product Declarations (EPDs) and footprint profiles for communities, companies, products, and individuals. They provide tools for lifecycle assessment and environmental impact analysis, helping communities and businesses make data-driven decisions to reduce their ecological footprint.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "python",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: carrent,
    //   source_code_link: "https://github.com/ModelEarth/OpenFootprint/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };