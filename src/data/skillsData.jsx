import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiFirebase,
  SiPostman,
  SiVercel,
} from "react-icons/si";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      {
        name: "HTML",
        icon: <FaHtml5 className="text-orange-600" />,
        value: 85,
      },
      {
        name: "CSS / Tailwind",
        icon: <FaCss3Alt className="text-blue-500" />,
        value: 80,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
        value: 75,
      },
      { name: "React", icon: <FaReact className="text-cyan-400" />, value: 75 },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-500" />,
        value: 70,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-600" />,
        value: 70,
      },
      {
        name: "Firebase",
        icon: <SiFirebase className="text-yellow-500" />,
        value: 65,
      },
    ],
  },
  {
    category: "Tools & Deployment",
    skills: [
      {
        name: "Git & GitHub",
        icon: <FaGithub className="text-black" />,
        value: 75,
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-orange-500" />,
        value: 70,
      },
      { name: "Vercel", icon: <SiVercel className="text-black" />, value: 75 },
    ],
  },
];
export default skillsData;
