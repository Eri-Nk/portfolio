import { useState, useRef, useEffect } from "react";
import projectDetailBg from "../assets/home-bg/projectDetailBg.jfif";
import { Link } from "react-router";
import { FaChevronLeft, FaChevronRight, FaSearchPlus } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const ProjectDetail = ({ project }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const swiperRef = useRef(null);
  const modalSwiperRef = useRef(null);

  const capitalizeFirstletter = (str) =>
    str.replace(/\b\w/gi, (boundaryWord) => boundaryWord.toUpperCase());

  const checkTarget = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }
  }, [isModalOpen]);

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

      {/* image and explanation section */}
      <div className="flex flex-col  md:flex-row gap-8">
        {/* modal images */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-20">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/85"
              onClick={checkTarget}
            ></div>

            {/* Modal Container */}
            <div className="relative max-w-[90vw] md:max-w-[70vw] lg:max-w-[50vw] bg-bg rounded-lg z-30 p-4">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                initialSlide={activeIndex - 1}
                onSwiper={(swiper) => (modalSwiperRef.current = swiper)}
              >
                {project.screenShots.map((screenShot, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={screenShot.src}
                      alt={`${project.title} ${screenShot.caption}`}
                      loading="lazy"
                      className="w-full max-h-[80vh] sm:max-h-[90vh] object-contain rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Close Button */}
              <button
                className="absolute top-2 right-2 bg-white hover:bg-gray-200 text-black w-8 h-8 rounded-full flex items-center justify-center shadow-md z-40"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* image container */}
        <div className="w-full md:w-3/5 relative bg-bg p-4 ">
          {/* main image */}
          <div className="relative">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}
              loop={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="rounded-lg"
              navigation={false}
            >
              {project.screenShots.map((screenShot, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={screenShot.src}
                    alt={`${project.title} ${screenShot.caption}`}
                    loading="lazy"
                    className="w-full h-48 sm:h-96 md:h-[20rem] lg:h-[27rem] object-scale-down rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Zoom Button */}
            <div
              className="absolute top-0 right-0 bg-black/50 text-white rounded-full cursor-pointer z-10 p-2 "
              onClick={() => setIsModalOpen(true)}
            >
              <div className="relative group">
                <FaSearchPlus size={18} />
                <span className="absolute right-5 bg-gray-600 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap">
                  Full Screen
                </span>
              </div>
            </div>
          </div>

          {/* container_thumbnail */}
          <div className="relative mt-4">
            <button className="absolute left-0 top-[30%]  hidden md:block p-3 bg-secondary rounded-full z-10 hover:brightness-125">
              <FaChevronLeft
                className="text-gray-700 text-xl"
                onClick={() => swiperRef?.current.slidePrev()}
              />
            </button>

            <button className="absolute right-0 top-[30%]  hidden md:block p-3 bg-secondary rounded-full z-10 hover:brightness-125">
              <FaChevronRight
                className="text-gray-700 text-xl"
                onClick={() => swiperRef.current?.slideNext()}
              />
            </button>

            <div className="w-full">
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                slidesPerView={4}
                spaceBetween={10}
              >
                {project.screenShots.map((screenShot, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={screenShot.src}
                      alt={`${project.title} ${screenShot.caption}`}
                      loading="lazy"
                      className="cursor-pointer w-full h-20 sm:h-24 md:h-28 lg:h-28 object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* 📄 Project Description */}
        <div className="">
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
