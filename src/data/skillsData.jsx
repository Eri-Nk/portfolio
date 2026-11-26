import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
  FaServer,
  FaCodeBranch,
  FaBrain,
  FaComments,
  FaShieldAlt,
  FaGraduationCap,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiFirebase,
  SiPostman,
  SiVercel,
  SiTypescript,
  SiRender,
} from "react-icons/si";

import { RiNextjsFill } from "react-icons/ri";

const skillsData = [
  {
    category: "AI & Emerging Technologies",
    description:
      "Exploring how AI and language models can improve applications, information access and everyday workflows.",
    skills: [
      { name: "AI Fundamentals", icon: <FaBrain /> },
      { name: "LLM Concepts", icon: <FaComments /> },
      { name: "AI-assisted Development", icon: <FaCodeBranch /> },
    ],
  },
  {
    category: "Frontend Development",
    description:
      "Building responsive, interactive and user-focused interfaces.",
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS / Tailwind", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Next.js", icon: <RiNextjsFill /> },
    ],
  },
  {
    category: "Backend & Data",
    description: "Developing application logic, APIs and data-driven features.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <FaServer /> },
      { name: "REST APIs", icon: <FaCodeBranch /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Prisma", icon: <FaDatabase /> },
      { name: "SQLite", icon: <FaDatabase /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Firestore", icon: <SiFirebase /> },
    ],
  },
  {
    category: "Tools & Deployment",
    description:
      "Using development tools, version control and deployment workflows.",
    skills: [
      { name: "Git & GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Render", icon: <SiRender /> },
      { name: "CI/CD Fundamentals", icon: <FaCodeBranch /> },
    ],
  },
];
export default skillsData;
export const certificationsData = [
  {
    title: "Elements of AI",
    issuer: "University of Helsinki, Finland",
    icon: <FaGraduationCap />,
    link: "https://drive.google.com/file/d/1-p2uPibjhLn341fcc384trb9POMCGHg5/view?usp=drive_link",
  },
  {
    title: "Cyber Security Awareness Training",
    issuer: "ESET",
    icon: <FaShieldAlt />,
    link: "https://drive.google.com/file/d/1-DsapbobRdX0qziZv_5LrT29toiT785t/view?usp=drive_link",
  },
];
