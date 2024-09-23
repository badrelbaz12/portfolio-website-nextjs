import './../i18n';
import { useTranslation } from 'react-i18next';
// const [t, i18n ] = useTranslation();

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaBitbucket,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaGamepad,
} from "react-icons/fa";

import {
  TbBrandCSharp,
  TbBrandJavascript,
  TbBrandCpp,
  TbDatabaseSearch,
  TbBrandBootstrap,
} from "react-icons/tb";
import { BiLogoJquery, BiLogoJava ,BiLogoPhp} from "react-icons/bi";
import {
  SiAdobephotoshop,
  SiExpress,
  SiMysql,
  SiSqlite,
  SiFirebase,
  SiPostman,
  SiFilezilla,
  SiAsana,
  SiAndroidstudio,
  SiApachenetbeanside,
  SiVisualstudiocode,
  SiVisualstudio,
  SiEclipseide,
  SiJirasoftware,
  SiMicrosoftoffice,
  SiPostgresql,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import {
  BsGlobe,
  BsCodeSlash,
  BsFiletypeSql,
  BsGit,
  BsAndroid2,
  BsTrello,
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";
import { FaDownload,FaEye} from "react-icons/fa6";

export const links = [
  { text: "home", path: "/" },
  { text: "about", path: "/about" },
  { text: "skills", path: "/skills" },
  { text: "projects", path: "/projects" },
  { text: "experience", path: "/experience" },
  { text: "resume", path: "/resume" },
  { text: "contact", path: "/contact" },
];

export const interestsData = [
  {
    interest: "interest1",
    icon: BsCodeSlash,
  },
  {
    interest: "interest2",
    icon: BsGlobe,
  },
  {
    interest: "interest3",
    icon: BsAndroid2,
  },
  {
    interest: "interest4",
    icon: AiFillCode,
  },
  {
    interest: "interest5",
    icon: GiArchiveResearch,
  },
  {
    interest: "interest6",
    icon: TbDatabaseSearch,
  },
  {
    interest: "interest7",
    icon: FaGamepad,
  },

];

// export const skillsData = [
//   {
//     name: "HTML5",
//     icon: FaHtml5,
//   },
//   {
//     name: "CSS3",
//     icon: FaCss3,
//   },
//   {
//     name: "Javascript",
//     icon: TbBrandJavascript,
//   },
//   {
//     name: "Jquery",
//     icon: BiLogoJquery,
//   },
//   {
//     name: "C#",
//     icon: TbBrandCSharp,
//   },
//   {
//     name: "Java",
//     icon: BiLogoJava,
//   },
//   {
//     name: "Bootstrap",
//     icon: TbBrandBootstrap,
//   },
//   {
//     name: "C/C++",
//     icon: TbBrandCpp,
//   },
//   {
//     name: "PHP",
//     icon: BiLogoPhp,
//   },
//   {
//     name: "ReactJS",
//     icon: FaReact,
//   },
//   {
//     name: "SQL",
//     icon: BsFiletypeSql,
//   },
//   {
//     name: "Android",
//     icon: BsAndroid2,
//   },
//   {
//     name: "NodeJs",
//     icon: FaNodeJs,
//   },
//   {
//     name: "Express",
//     icon: SiExpress,
//   },
//   {
//     name: "Photoshop",
//     icon: SiAdobephotoshop,
//   },
//   {
//     name: "Postman",
//     icon: SiPostman,
//   },
//   {
//     name: "Git",
//     icon: BsGit,
//   },
//   {
//     name: "Github",
//     icon: FaGithub,
//   },
//   {
//     name: "Bitbucket",
//     icon: FaBitbucket,
//   },
//   {
//     name: "ChatGPT",
//     icon: GiArtificialIntelligence,
//   },
//   {
//     name: "Bash",
//     icon: SiGnubash,
//   },
// ];
export const skillsDevelopment = [
    {
      name: "HTML5",
      icon: FaHtml5,
    },
    {
      name: "CSS3",
      icon: FaCss3,
    },
    {
      name: "Javascript",
      icon: TbBrandJavascript,
    },
    {
      name: "Jquery",
      icon: BiLogoJquery,
    },
    {
      name: "C#",
      icon: TbBrandCSharp,
    },
    {
      name: "Java",
      icon: BiLogoJava,
    },
    {
      name: "Bootstrap",
      icon: TbBrandBootstrap,
    },
    {
      name: "C/C++",
      icon: TbBrandCpp,
    },
    {
      name: "PHP",
      icon: BiLogoPhp,
    },
    {
      name: "ReactJS",
      icon: FaReact,
    },
    {
      name: "Android",
      icon: BsAndroid2,
    },
    {
      name: "NodeJs",
      icon: FaNodeJs,
    },
    {
      name: "Express",
      icon: SiExpress,
    },
  ];
  export const skillsDatabase = [
    {
      name: "SQL",
      icon: BsFiletypeSql,
    },
    {
      name: "MYSQL",
      icon: SiMysql,
    },
    {
      name: "Sqlite",
      icon: SiSqlite,
    },
    {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
    {
      name: "Firebase",
      icon: SiFirebase,
    },
  ];
  export const versionControlSystems = [
    {
      name: "GitHuB",
      icon: FaGithub,
    },
    {
      name: "BitBucket",
      icon: FaBitbucket,
    },
    // {
    //   name: "Gitbush",
    //   icon: BsGit,
    // },
    {
      name: "FileZilla",
      icon: SiFilezilla,
    },
  ];
  export const TaskManagementTools = [
    {
      name: "Trello",
      icon: BsTrello,
    },
    {
      name: "Asana",
      icon: SiAsana,
    },
    {
      name: "Jira",
      icon: SiJirasoftware,
      },
    {
        name: "Photoshop",
        icon: SiAdobephotoshop,
      },
      {
        name: "Office Suite",
        icon: SiMicrosoftoffice,
      },

      {
        name: "PostMan",
        icon: SiPostman,
      },

  ];
  export const ides = [
    {
      name: "Android Studio",
      icon: SiAndroidstudio,
    },
    {
      name: "Eclipse",
      icon: SiEclipseide,
    },
    {
      name: "Visual Studio",
      icon: SiVisualstudio,
    },
    {
      name: "Visual Studio Code",
      icon: SiVisualstudiocode,
    },
    {
        name: "NetBeans",
        icon: SiApachenetbeanside,
    },
  ];
//   export const extrenalTools = [
//     {
//       name: "Photoshop",
//       icon: SiAdobephotoshop,
//     },
//     {
//       name: "PostMan",
//       icon: SiPostman,
//     },
//     {
//       name: "ChatGPT",
//       icon: GiArtificialIntelligence,
//     },
    // {
    //   name: "Microsoft Office Suite",
    //   icon: SiMicrosoftoffice,
    // },

//   ];

export const workData = [
  {
    company: "mmgi",
    designation: "mmgiDomaine",
    duration: "mmgiDate",
    companyImg: "mmig.png",
    mmgiTache1: "mmgiTache1",
    mmgiTache2: "mmgiTache2",
    mmgiTache3: "mmgiTache3",
    mmgiTache4: "mmgiTache4",
  },
  {
    company: "freelancer",
    designation: "domaineFreelance",
    duration: "freelancerDate",
    companyImg: "freelancer.png",
    freelanceTache1: "freelanceTache1",
    freelanceTache2: "freelanceTache2",
    freelanceTache3: "freelanceTache3",
    freelanceTache4: "freelanceTache4",
  },
];

export const otherWorkData = [
    {
        company: "cssmb",
        designation: "cssmbDomaine",
        duration: "cssmbDate",
        companyImg: "cssmb.png",
        cssmbTache1: "cssmbTache1",
        cssmbTache2: "cssmbTache2",
        cssmbTache3: "cssmbTache3",
        cssmbTache4: "cssmbTache4",
      },
    {
        company: "bicha",
        designation: "bichaDomaine",
        duration: "bichaDate",
        companyImg: "bicha.png",
        bichaTache1: "bichaTache1",
        bichaTache2: "bichaTache2",
        bichaTache3: "bichaTache3",
        bichaTache4: "bichaTache4",
      },

  {
    company: "zarotti",
    designation: "zarottiDomaine",
    duration: "zarottiDate",
    companyImg: "zarotti.png",
    zarottiTache1: "zarottiTache1",
    zarottiTache2: "zarottiTache2",
    zarottiTache3: "zarottiTache3",
    zarottiTache4: "zarottiTache4",

  },
];

export const education = [
  {
    company: "collegeUniv",
    designation: "collegeUnivDomaine",
    duration: "collegeUnivDate",
    companyImg: "universel.png",
    description: (
      <>
      </>
    ),
  },
  {
    company: "ibnZohr",
    designation: "ibnZohrDomaine",
    duration: "ibnZohrDate",
    companyImg: "ibnzohr.png",
    description: (
      <>
      </>
    ),
  },
];

export const certificat = [
    {
      company: "angelaUdemy",
      designation: "angelaUdemyDomaine",
      duration: "angelaUdemyDate",
      lenght: "angelaUdemyLenght",
      companyImg: "udemy.png",
      link: "https://www.udemy.com/certificate/UC-c702130b-55dc-403c-8d85-38256e87d441/",
      description: (
        <>
        </>
      ),
    },

  ];

export const projectsData = [
  {
    type: "WEB-APP",
    title: "memoryGame",
    image: "memory-games",
    link: "https://boussemousset.github.io/memory-game/",
    source: "https://github.com/BoussemousseT/memory-game",
    description: "memoryGameDescription",
    languages: "memoryGameLanguages",
    team: "memoryGameGroup",
  },
  {
    type: "WEB-APP",
    title: "videoGame",
    image: "jeu-video-website",
    link: "https://boussemousset.github.io/Site-jeux-video/produit/index.html",
    source: "https://github.com/BoussemousseT/Site-jeux-video",
    description: "videoGameDescription",
    languages: "videoGameLanguages",
    team: "videoGameGroup",
  },
  {
    type: "MOBILE-APP",
    title: "chatAi",
    image: "mobile-app-chat-ai",
    link: "https://play.google.com/store/apps/details?id=com.chatbotai.textscannerbotai",
    source: "https://github.com/BoussemousseT/Chat-AI-Image-Text-Scanner",
    description: "chatAiDescription",
    languages: "chatAiLanguages",
    team: "chatAiGroup",
  },
  {
    type: "WEB-APP",
    title: "electronicsWebsite",
    image: "e-boutique-electronique",
    link: null,
    source: "https://github.com/BoussemousseT/Site-web-E-Boutique-mobile-application",
    description: "electronicsWebsiteDescription",
    languages: "electronicsWebsiteLanguages",
    team: "electronicsWebsiteGroup",
  },
  {
    type: "WEB-APP",
    title: "hotel",
    image: "hotel-website",
    link: "https://boussemousset.github.io/Site-reservation-hotel/",
    source: "https://github.com/BoussemousseT/Site-reservation-hotel",
    description: "hotelDescription",
    languages: "hotelLanguages",
    team: "hotelGroup",
  },
  {
    type: "MOBILE-APP",
    title: "electronicsApp",
    image: "mobile-app-electro",
    link: null,
    source: "https://github.com/BoussemousseT/Site-web-E-Boutique-mobile-application/tree/main/application_Mobile",
    description: "electronicsAppDescription",
    languages: "electronicsAppLanguages",
    team: "electronicsAppGroup",
  },
  {
    type: "DESKTOP-APP",
    title: "contactsApp",
    image: "gestion-contacts",
    link: null,
    source: "https://github.com/BoussemousseT/Gestion-de-contacts",
    description: "contactsAppDescription",
    languages: "contactsAppLanguages",
    team: "contactsAppGroup",
  },
  {
    type: "CONSOLE-APP",
    title: "spaceInv",
    image: "space-invader",
    link: null,
    source: "https://github.com/BoussemousseT/Space-Invaders-2/tree/main/TP%20-%20D03",
    description: "spaceInvDescription",
    languages: "spaceInvLanguages",
    team: "spaceInvGroup",
  },
  {
    type: "DESKTOP-APP",
    title: "battleShip",
    image: "battle-ship",
    link: null,
    source: "https://github.com/BoussemousseT/Battle-Ship",
    description: "battleShipDescription",
    languages: "battleShipLanguages",
    team: "battleShipGroup",
  },
  {
    type: "WEB-APP",
    title: "freelanceMarket",
    image: "e-boutique-services",
    link: null,
    source: "https://github.com/BoussemousseT/Site-E-Boutique",
    description: "freelanceMarketDescription",
    languages: "freelanceMarketLanguages",
    team: "freelanceMarketGroup",
  },
  {
    type: "MOBILE-APP",
    title: "cookingApp",
    image: "mobile-app-recettes",
    link: null,
    source: "https://github.com/BoussemousseT/Recettes-App-Android",
    description: "cookingAppDescription",
    languages: "cookingAppLanguages",
    team: "cookingAppGroup",
  },
  {
    type: "WEB-APP",
    title: "contactWebsite",
    image: "list-clients",
    link: null,
    source: "https://github.com/BoussemousseT/Gestion-d-une-liste-d-enregistrements",
    description: "contactWebsiteDescription",
    languages: "contactWebsiteLanguages",
    team: "contactWebsiteGroup",
  },
  {
    type: "WEB-APP",
    title: "donWebsite",
    image: "awf-donation",
    link: "https://awfdonation.com/",
    source: "https://github.com/BoussemousseT/donation-page",
    description: "donWebsiteDescription",
    languages: "donWebsiteLanguages",
    team: "donWebsiteGroup",
  },
  {
    type: "WEB-APP",
    title: "nftWebsite",
    image: "nft-plateform",
    link: null,
    source: "https://github.com/BoussemousseT/nft-project",
    description: "nftWebsiteDescription",
    languages: "nftWebsiteLanguages",
    team: "nftWebsiteGroup",
  },
//   {
//     type: "WEB-APP",
//     title: "Portfolio Website",
//     image: "portfolio-website",
//     link: "https://www.boussemousse.com",
//     source: "https://github.com/BoussemousseT/my-portfolio",
//     description: "It's a compilation of my personal projects, student collaborations, and professional skills. Discover my achievements and my professional journey all in one place!",
//     languages: "JavaScript, Bootstrap, React",
//     team: "Taoufik Boussemousse",
//   },
];


export const socialMediaLinks = [
  {
    href: "https://github.com/BoussemousseT",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.linkedin.com/in/t-boussemousse/",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
  // {
  //   href: "https://twitter.com/codersk36",
  //   icon: FaTwitter,
  //   backgroundColor: "social.twitter",
  //   hoverColor: "social.twitterHover",
  // },
  // {
  //   href: "https://www.instagram.com/taoufik_boussemousse/",
  //   icon: FaInstagram,
  //   backgroundColor: "social.instagram",
  //   hoverColor: "social.instagramHover",
  // },
  // {
  //   href: "https://codersk36.hashnode.dev/",
  //   icon: FaHashnode,
  //   backgroundColor: "social.hashnode",
  //   hoverColor: "social.hashnodeHover",
  // },
];

export const query = `
query GetUserArticles($page: Int = 0) {
  user(username: "") {
    publication {
      posts(page: $page) {
        title
        brief
        slug
        coverImage
      }
    }
  }
}
`;
