import { FaCode, FaBolt, FaDatabase, FaPalette, FaBrain } from "react-icons/fa";

const myServices = [
  {
    icon: <FaBrain className="text-4xl text-secondary" />,
    title: "AI & LLM Exploration",
    description:
      "Exploring how AI and language models can make applications more useful and workflows smarter.",
  },
  {
    icon: <FaCode className="text-4xl text-secondary" />,
    title: "Frontend Development",
    description: "Building responsive and interactive web applications.",
  },
  {
    icon: <FaBolt className="text-4xl text-secondary" />,
    title: "Performance Optimization",
    description: "Optimizing websites for better speed and user experience.",
  },
  {
    icon: <FaDatabase className="text-4xl text-secondary" />,
    title: "Backend Services",
    description:
      "Integrating authentication and databases for dynamic web apps.",
  },
  {
    icon: <FaPalette className="text-4xl text-secondary" />,
    title: "UI/UX Enhancements",
    description: "Improving web interfaces for better user experience.",
  },
];

export default myServices;
