import { useState } from "react";
import projectDetailBg from "../assets/home-bg/projectDetailBg.jfif";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router";
import { FaChevronLeft, FaChevronRight, FaSearchPlus } from "react-icons/fa";

const ProjectDetail = ({ project }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = (idx = 0, ignoreIndexState = false) => {
    if (ignoreIndexState) {
      setSlideIndex(idx);
      return;
    }
    setSlideIndex((prevIndex) =>
      prevIndex === project.screenShots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = (idx) => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? project.screenShots.length - 1 : prevIndex - 1
    );
  };

  const capitalizeFirstletter = (str) =>
    str.replace(/\b\w/gi, (boundaryWord) => boundaryWord.toUpperCase());

  return (
    <div className="flex flex-col">
      <div
        className="relative h-48 md:h-64 bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${projectDetailBg})` }}
      >
        {/*for overlay*/}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Project Name */}
        <h1 className="relative text-white text-3xl font-bold z-10 py-4">
          {capitalizeFirstletter(project.title)}
        </h1>

        {/* breadcrumb */}
        <ul className="relative flex items-center space-x-2 text-gray-300 text-lg font-semibold z-10">
          <li className="hover:underline ">
            <Link to="/" className="visited:text-gray-300">
              Home
            </Link>
          </li>
          <span>/</span>
          <li>{capitalizeFirstletter(project.title)}</li>
        </ul>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* image container */}
        <div className="w-full md:w-3/5 relative">
          {/* main image */}
          <div className="relative ">
            {project.screenShots.map((screenShot, index) => (
              <img
                key={index}
                src={screenShot.src}
                alt={`${project.title} ${screenShot.caption}`}
                loading="lazy"
                className={`${
                  index === slideIndex ? "block" : "hidden"
                } w-full h-96 object-cover rounded-lg`}
              />
            ))}

            {/* Modal image */}
            <div
              className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full cursor-pointer"
              onClick={() => openModal()}
            >
              <FaSearchPlus size={24} />
            </div>

            {/* arrow buttons */}
            <div className="absolute inset-y-1/2 left-2 right-2 flex justify-between items-center">
              <FaAngleLeft
                onClick={prevSlide}
                className="text-white text-4xl cursor-pointer bg-black/50 p-2 rounded-full"
              />
              <FaAngleRight
                onClick={nextSlide}
                className="text-white text-4xl cursor-pointer bg-black/50 p-2 rounded-full"
              />
            </div>
          </div>

          {/* container_thumbnail */}
          <div className="relative mt-4">
            {/* Left Arrow (Shows if Overflow) */}
            <button className="absolute left-0 h-full bg-gradient-to-r from-gray-100 to-transparent w-6 z-10 hidden md:block">
              <FaChevronLeft className="text-gray-700 text-xl" />
            </button>

            {/* Right Arrow (Shows if Overflow) */}
            <button className="absolute right-0 h-full bg-gradient-to-l from-gray-100 to-transparent w-6 z-10 hidden md:block">
              <FaChevronRight className="text-gray-700 text-xl" />
            </button>

            <div className="w-full overflow-x-auto flex justify-evenly scroll-smooth snap-x no-scrollbar">
              {project.screenShots.map((screenShot, index) => (
                <img
                  key={index}
                  src={screenShot.src}
                  alt={`${project.title} ${screenShot.caption}`}
                  loading="lazy"
                  className="cursor-pointer w-24 h-24 object-cover rounded-lg snap-start"
                  onClick={() => {
                    nextSlide(index, true);
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 📄 Project Description */}
        <div className="w-full md:w-2/5">
          {project.body.split("\n").map((paragraph, idx) =>
            paragraph.trim() ? (
              <p key={idx} className="py-2 text-gray-800">
                {paragraph}
              </p>
            ) : null
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Key Features */}
          <div className="bg-white shadow-lg rounded-lg p-5">
            <h2 className="heading">Key Feature</h2>
            {project.keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </div>

          {/* techStack */}
          <div className="bg-white shadow-lg rounded-lg p-5">
            <h2 className="heading">TechStack</h2>
            {Object.entries(project.techStack).map(([key, value], index) => (
              <li key={index}>
                <strong>{key}: </strong>
                {value}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
