import { useState, useRef, useEffect } from "react";
import projectDetailBg from "../assets/bg-photos/projectDetailBg.jfif";
import { FaChevronLeft, FaChevronRight, FaSearchPlus } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import PageBanner from "../components/PageBanner";

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

  // const capitalizeFirstletter = (str) =>
  //   str.replace(/\b\w/gi, (boundaryWord) => boundaryWord.toUpperCase());

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
      <PageBanner
        title={project.title}
        category={project.category}
        bg={projectDetailBg}
      />

      {/* image and explanation section */}

      <div className="md:clear-both px-6 py-10">
        {/* modal images */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-20">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/85"
              onClick={checkTarget}
            ></div>

            {/* Modal Container */}
            <div className="relative max-w-[90vw] md:max-w-[70vw] lg:max-w-[50vw] bg-bg rounded-lg z-30 p-2 ">
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

        <div className="md:float-left md:w-2/5 md:inline-block h-auto md:mr-8">
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
              title="full screen"
            >
              <div className="relative group">
                <FaSearchPlus size={18} />
              </div>
            </div>
          </div>

          {/* container_thumbnail */}
          <div className="relative mt-2">
            <button className="absolute left-0 top-[30%] md:block p-1.5 md:p-3 bg-secondary rounded-full z-10 hover:brightness-125">
              <FaChevronLeft
                className="text-gray-700 text-sm md:text-xl"
                onClick={() => swiperRef?.current.slidePrev()}
              />
            </button>

            <button className="absolute right-0 top-[30%] md:block p-1.5 md:p-3 bg-secondary rounded-full z-10 hover:brightness-125">
              <FaChevronRight
                className="text-gray-700 text-sm md:text-xl"
                onClick={() => swiperRef.current?.slideNext()}
              />
            </button>

            <div className="w-full mb-3">
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

        {/*  Project Description */}

        {project.body.split("\n").map((paragraph, idx) =>
          paragraph.trim() ? (
            <p key={idx} className="py-3">
              {paragraph}
            </p>
          ) : null
        )}
      </div>
      <p className="text-lg font-semibold mt-4 text-center">
        This is deployed and accessible{" "}
        <a
          href={project.host}
          target="_blank"
          rel="noreferrer noopener"
          className="text-secondary font-bold underline hover:text-primary"
        >
          here
        </a>
      </p>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Key Features */}
          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-primary mb-4">
              Key Features
            </h2>
            <ul className="space-y-3  pl-5">
              {Object.entries(project.keyFeatures).map(
                ([title, description], index) => (
                  <li key={index} className="flex flex-col">
                    <span className="font-bold text-secondary">{title}</span>
                    <span>{description}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-primary mb-4">
              Tech Stack
            </h2>
            <ul className="space-y-3 text-gray-700">
              {Object.entries(project.techStack).map(([key, value], index) => (
                <li key={index} className="flex items-start">
                  <span className="text-secondary font-bold mr-2">•</span>
                  <strong className="capitalize text-secondary">
                    {key}:
                  </strong>{" "}
                  <span className="ml-1">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
