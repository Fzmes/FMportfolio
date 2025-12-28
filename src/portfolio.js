/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Fatima's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Meskine Fatima Ezzahra Portfolio",
    type: "website",
    url: "https://fzmes.github.io/FMportfolio/",
  },
};

//Home Page
const greeting = {
  title: "Meskine Fatima Ezzahra",
  logo_name: "MeskineFtaimaEzzahra",
  nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/Fzmes/masterPortfolio",
  githubProfile: "https://github.com/Fzmes",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Fzmes",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Fzmes",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/fatima-ezzahra-meskine/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:meskinefatimaezzahra@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable, production-ready deep learning and statistical models",
        "⚡ Working on Computer Vision and NLP projects with practical implementations",
        "⚡ Designing complex quantitative models for dynamic forecasting and time series analysis",
        "⚡ Extracting actionable insights from large, complex datasets using advanced analytics",
        "⚡ Building end-to-end ML pipelines and deploying models in production environments",
      ],
      description:
        "I specialize in transforming raw data into meaningful insights and predictive solutions using AI and machine learning. My work combines statistical modeling, deep learning, and hands-on experience in CV and NLP to deliver scalable, production-ready results.",

      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive, modern web applications using React, Node.js, and Express",
        "⚡ Integrating REST APIs and managing backend databases with MongoDB and SQL",
        "⚡ Ensuring cross-browser compatibility, performance optimization, and scalable architecture",
        "⚡ Applying best practices in UI/UX for data-driven dashboards and applications",
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
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
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
      ],
    },
    {
      title: "Big Data & Distributed Computing",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Processing and analyzing large-scale datasets using Hadoop and Apache Spark",
        "⚡ Designing and optimizing distributed data pipelines for batch and large-scale processing",
        "⚡ Implementing parallel computing strategies to improve performance and scalability",
        "⚡ Integrating Big Data workflows with machine learning and analytics pipelines",
      ],
      softwareSkills: [
        {
          skillName: "Hadoop",
          fontAwesomeClassname: "simple-icons:apachehadoop",
          style: {
            color: "#ff7300ff",
          },
        },
        {
          skillName: "Cassandra",
          fontAwesomeClassname: "simple-icons:apachecassandra",
          style: {
            color: "#0059ffff",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Spark",
          fontAwesomeClassname: "simple-icons:apachespark",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/fzmesk/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/meskinefatimaez1",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title:
        "ENSIASD (École Nationale Supérieure de l’Intelligence Artificielle et des Sciences de Données) – Taroudant",
      subtitle: "Engineering Program",
      logo_path: "ensiasd.png",
      alt_name:
        "École Nationale Supérieure de l’Intelligence Artificielle et des Sciences de Données",
      duration: "2023 – 2026",
      descriptions: [
        "⚡ Engineering program in Data Science, Big Data, and Artificial Intelligence.",
        "⚡ Coursework and projects in machine learning, deep learning, data analysis, and distributed systems.",
      ],
    },
    {
      title: "EST(Ecole Supérieure de Technologie) Agadir",
      subtitle: "Diplôme Universitaire de Technologie (DUT)",
      logo_path: "ensiasd.png",
      alt_name: "École Supérieure de Technologie Agadir",
      duration: "2021 – 2023",
      descriptions: [
        "⚡ DUT in Computer Engineering (Génie Informatique).",
        "⚡ Strong foundation in programming, algorithms, databases, and software engineering.",
      ],
    },
    {
      title: "Baccalauréat Sciences Physiques BIOF",
      subtitle: "Mention très bien",
      logo_path: "ibn.png",
      alt_name: "Scientific Baccalaureate",
      duration: "2021",
      descriptions: [
        "⚡ Scientific high school diploma with focus on mathematics, physics, and biology.",
      ],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning Using Python",
      subtitle: "- Simplilearn|SkillUp",
      logo_path: "simpleli.png",
      certificate_link: "https://simpli-web.app.link/e/bi4XXdMgtZb",
      alt_name: "",
      color_code: "#ffffffff",
    },
    {
      title: "LLMs & LangChain and Workflow Design",
      subtitle: "- Simplilearn|SkillUp",
      logo_path: "simpleli.png",
      certificate_link: "https://simpli-web.app.link/e/GM1s71FgtZb",
      alt_name: "",
      color_code: "#ffffffff",
    },
    {
      title: "Data Scientist Course",
      subtitle: "- Simplilearn|SkillUp",
      logo_path: "simpleli.png",
      certificate_link: "https://simpli-web.app.link/e/BIuGz9IgtZb",
      alt_name: "",
      color_code: "#ffffffff",
    },
    {
      title: "Data Science Job Simulation",
      subtitle: "- Forage|British Airways",
      logo_path: "bri.png",
      certificate_link:
        "https://www.theforage.com/completion-certificates/tMjbs76F526fF5v3G/NjynCWzGSaWXQCxSX_tMjbs76F526fF5v3G_tJvQvrNTNuHjn4yDg_1765410549626_completion_certificate.pdf",
      alt_name: "",
      color_code: "#ffffffff",
    },
    {
      title: "Data Analytics	Job	Simulation",
      subtitle: "- Quantium|British Airways",
      logo_path: "quantium.png",
      certificate_link:
        "https://www.theforage.com/completion-certificates/32A6DqtsbF7LbKdcq/NkaC7knWtjSbi6aYv_32A6DqtsbF7LbKdcq_tJvQvrNTNuHjn4yDg_1766360354076_completion_certificate.pdf",
      alt_name: "",
      color_code: "#ffffffff",
    },
    {
      title: "Data Science & Analytics",
      subtitle: "- HP Life| HP Foundation",
      logo_path: "hp.png",
      certificate_link:
        "https://www.life-global.org/certificate/380037db-a418-43d0-942f-3499686dbf26",
      alt_name: "hp",
      color_code: "#ffffff",
    },
    {
      title: "Software Engineer Intern",
      subtitle: "- HackerRank",
      logo_path: "hack.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/iframe/bc4d4df03f28",
      alt_name: "hackrank",
      color_code: "#ffffff",
    },
    {
      title: "Problem Solving",
      subtitle: "- HackerRank",
      logo_path: "hack.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/iframe/c7271099afc5",
      alt_name: "hackrank",
      color_code: "#ffffff",
    },
    {
      title: "SQL Advanced ",
      subtitle: "- HackerRank",
      logo_path: "hack.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/iframe/c464d4455c15",
      alt_name: "hackrank",
      color_code: "#ffffff",
    },
    {
      title: "Intermediate SQL",
      subtitle: "- Datacamp",
      logo_path: "camp.png",
      certificate_link:
        "https://www.datacamp.com/skill-verification/ISQL0010405242858",
      alt_name: "Datacamp",
      color_code: "#ffffff",
    },
    {
      title: "GREEN DIGITAL CERTIFICATE PROGRAM",
      subtitle: "- INCO Academy",
      logo_path: "inco.png",
      certificate_link:
        "https://learning.inco-group.co/pluginfile.php/1/tool_certificate/issues/1764267965/8087011288FM.pdf",
      alt_name: "IBM",
      color_code: "#3ac11fd1",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship",
  description:
    "I have completed internships focused on web development and interactive platforms, working on real-world projects involving user management, dynamic content generation, and database integration.",
  header_image_path: "experience.png",
  sections: [
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "Web Application Developer Intern",
          company: "Tweadup Agency",
          company_url: "https://tweadup.com/",
          logo_path: "tweadup.png",
          duration: "April 2023 - June 2023",
          location: "Agadir, Morocco",
          description:
            "Designed and developed an interactive web platform for online exam management, covering user registration, authentication, and automated evaluation of results. Implemented role-based access for administrators, teachers, and students, dynamic questionnaire generation from a database, and result management.",
          color: "#ffffff",
        },
        {
          title: "Web Developer Intern",
          company: "DamanWeb Agency",
          company_url: "#",
          logo_path: "dama.png",
          duration: "July 2022 – August 2022",
          location: "Agadir, Morocco",
          description:
            "Developed an interactive company website as part of a web development project. Worked on front-end and back-end features using HTML, CSS, JavaScript, and Laravel. Integrated a MySQL relational database to manage users and core website functionalities.",
          color: "#ffffff",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.png",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.png",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.png",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.png",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
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
  publicationsHeader,
  publications,
  contactPageData,
};
