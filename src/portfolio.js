/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ashutosh Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ashutosh Kumar Portfolio",
    type: "website",
  },
};

//Home Page
const greeting = {
  title: "Ashutosh Kumar",
  logo_name: "AshutoshKumar",
  nickname: "Ashu",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  // resumeLink:
  //   "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  // portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  // githubProfile: "https://github.com/ashutosh1919",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: https://github.com/iashu5",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/iashu5",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/iashu5",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:iashu205@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  {
    name: "Facebook",
    link: "https://www.facebook.com/iashu5",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/i_ashu_5/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "React TypeScript",
      fileName: "ReactTypeScriptImg",
      skills: [
        "⚡ Building modern, responsive web applications using React and TypeScript",
        "⚡ Expertise in state management with tools like Redux, React Context API",
        "⚡ Developing reusable and scalable UI components with React hooks and TypeScript interfaces",
        "⚡ Implementing type-safe APIs and enhancing code quality with TypeScript’s static typing",
        "⚡ Experience with component libraries like Material-UI and Tailwind CSS for styling",
        "⚡ Optimizing performance in React apps with lazy loading, code splitting, and memoization",
        "⚡ Integrating RESTful APIs and mySql endpoints for dynamic data fetching",
        "⚡ Proficient in using modern development tools like Webpack, Babel, and ESLint for streamlined workflows",
      ],

      softwareSkills: [
        
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "ReactTS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "VsCode",
          fontAwesomeClassname: "skill-icons:vscode-light",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Java FullStack Developer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Creating application backend in Java with Spring Boot, Hibernate, and JPA",
        "⚡ Integrating RESTful APIs with secure, scalable backend services",

        "⚡ Experience with databases like MySQL",

        "⚡ Experienced in using PuTTY and WinSCP for deployment on live servers.",

        "⚡ Expertise in version control systems such as Git, GitHub, and GitLab",
        "⚡ Knowledge of Agile methodologies and experience working in Agile Scrum teams",

        "⚡ Optimizing database queries and improving application performance with advanced SQL and indexing techniques",
      ],

      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactTS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            color: "#339933",
          },
        },
        
        {
          skillName: "Spring",
          fontAwesomeClassname: "skill-icons:spring-light",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "skill-icons:mysql-light",
          style: {
            color: "#CB3837",
          },
        },
       
      ],
    },
    // {
    //   title: "Tools Used",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    // ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/akashutosh9122",
    },
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "Chandigarh University",
      subtitle: "MCA",
      logo_path: "cu_logo.jpg",
      alt_name: "IIITDM Kurnool",
      duration: "2024 - 2026",
      descriptions: [
        "⚡ Developed skills in database design, normalization, and optimization techniques.",
        "⚡ Explored complex networking concepts, including network architecture and protocols.",
        "⚡ Implemented and configured various networking devices to simulate real-world scenarios.",
        "⚡ Learned essential cryptographic techniques and their applications in securing data.",
        "⚡ Integrated front-end and back-end technologies to create dynamic user experiences.",
      ],
      website_link: "https://www.cuchd.in/",
    },
    {
      title: "Netaji Subhas University",
      subtitle: "BCA",
      logo_path: "NSU_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ Completed a Bachelor of Computer Applications (BCA) with strong foundations in programming languages such as Java, C++, Python, and web technologies like HTML, CSS, and JavaScript.",
        "⚡ Developed practical experience in database management, working with SQL databases like MySQL.",
        "⚡ Built a variety of software applications, including web and desktop applications, focusing on user-centric design and efficient backend logic.",
        "⚡ Gained knowledge in key areas of computer science, including data structures, algorithms, and object-oriented programming (OOP), which enhanced problem-solving and coding skills.",
        "⚡ Worked on group projects involving web development with frameworks like React for front-end and Java for back-end, ensuring full-stack development experience.",

        "⚡ Took part in a final-year project on [insert project details], showcasing skills in project management, teamwork, and technical development.",
      ],

      website_link: "https://nsuniv.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: " AWS Certified Cloud",
      subtitle: "-  Deepak Dubey",
      logo_path: "AWS.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-c32a3026-58aa-453c-8bcb-44dccfad419f/",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: " Docker Basics",
      subtitle: "- Frank Anemaet",
      logo_path: "docker.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-b9ac3bae-9ddf-41ee-b900-6eae42cfd704/",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: " AWS Certified Advanced Networking",
      subtitle: "-  Dr. José Prabhu J",
      logo_path: "AWS.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-695cb9ff-e02f-4880-8d0f-edbf14105573/",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: " ReactJs",
      subtitle: "-  Sara Academy",
      logo_path: "react.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-fae8e760-b512-4a4b-8de9-7b974e82c74e/",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship",
  description:
    "I have worked with startups companies, specializing in full-stack development using React, TypeScript,Java Spring Boot and Mysql. I am also passionate about open-source contributions and organizing community events.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "June 2023 - Present",
          location: "San Jose, CA, USA",
          description:
            "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000",
        },
      ], //
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Full Stack Developer",
          company: "SevenMentor Pvt Ltd.",
          // company_url: "https://www.tiktok.com/en/",
          logo_path: "seven.webp",
          duration: "Aug 2024 - Present",
          location: "Shivajinagar Pune, INDIA",
          description:
            "Developed an online education platform using Java Spring Boot for the backend, MySQL for database management, and React for the frontend, enabling users to purchase and access various courses. Integrated APIs for seamless data communication between the frontend and backend.",
          color: "#000000",
        },
        {
          title: "Trainee Software Developer",
          company: "Medimaze Solutions Pvt Ltd.",
          //company_url: "https://www.tiktok.com/en/",
          logo_path: "medimaze.jpg",
          duration: "Aug 2023 - Jan 2024",
          location: "Chinchwad Pune, INDIA",
          description:
            "I developed a fundraising platform using React for the frontend, ensuring responsive UI and smooth user experience. I collaborated with the backend team, integrating Python APIs and MySQL databases to manage data flow and user interactions. My role included designing UI components, binding APIs, and optimizing performance.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects leverage a wide range of modern technologies. My primary focus has been on building web applications using Java Spring and Spring Boot for the backend, combined with HTML, CSS, and JavaScript frameworks like React for the frontend.",
  avatar_image_path: "projects_image.svg",
};



// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ashuu.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Java, Spring, React, Mysql.",
  },
  blogSection: {
    
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
   
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Prakash Nagar, Telco, Jamshedpur, INDIA 831004",
    locality: "Telco",
    country: "INDIA",
    region: "Jharkhand",
    postalCode: "831004",
    streetAddress: "Prakash Nagar",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/MYfymzDJgHbFYH1CA",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  
  contactPageData,
};
