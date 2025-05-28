import imageOne from "../assets/bg-photos/imageOne.jpg";
import imageTwo from "../assets/bg-photos/imageTwo.jpg";
import imageThree from "../assets/bg-photos/imageThree.jpeg";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Button from "../components/Button";
import { projects } from "../data/projects";
import Services from "../data/services";
import { Link } from "react-router";
import PageHelmet from "../components/PageHelmet";

const homeImages = [imageOne, imageTwo, imageThree];

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex === homeImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      <PageHelmet title="Home | Eri Portfolio" />
      <div className="relative w-full min-h-[70vh] overflow-hidden">
        {homeImages.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`object-cover absolute transition-opacity duration-[3000ms] w-full h-full inset-0 ${
              slideIndex === index ? "opacity-100" : "opacity-0"
            }`}
            alt={`Slide ${index + 1}`}
          />
        ))}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 ">
          <TypeAnimation
            sequence={[
              "Code. Learn. Build. Repeat.\nLet's make something incredible!",
              4000,
              "",
            ]}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            wrapper="span"
            speed={{ type: "keyStrokeDelayInMs", value: 90 }}
            style={{
              display: "block",
              color: "white",
              whiteSpace: "pre-line",
            }}
            repeat={Infinity}
            deletionSpeed={70}
          />
        </div>
      </div>

      <div className="text-center my-16 px-4 flex flex-col gap-4">
        <p className="text-lg md:text-xl lg:text-2xl max-w-lg mx-auto text-text">
          Hi, I'm Erifamonyo 'Eri' Chukwuma Nkobo, a developer on a journey of
          endless learning and growth.
        </p>
        <Link to="/about">
          <Button variant="secondary">More About Me</Button>
        </Link>
      </div>

      {/* services section */}
      <div className=" bg-bg text-text">
        <div className="container mx-auto text-center p-6">
          <h2 className="heading">My Services</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Services.map((service, index) => (
              <div
                key={index}
                className="p-6 dark:bg-[#070714] rounded-xl shadow-lg flex flex-col items-center 
              hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                {service.icon}
                <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                <p className="text-lg mt-2 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* projects images */}
      <div className="flex flex-col my-48 py-6 bg-bg px-4 sm:px-6 items-center">
        <h2 className="heading">My Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {projects.map((project, index) =>
            // project images
            project.screenShots.slice(0, 2).map((screenShot, index) => (
              <Link
                to={`/projects/${project.category}/${project.id}`}
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg bg-gray-50"
              >
                <img
                  src={screenShot.src}
                  alt={`${project.title} ${screenShot.caption}`}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Slide-in Write-up */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-white text-center p-4">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm">{screenShot.caption}</p>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
        <div className="text-center mt-14">
          <Link to="/projects" className="sm:w-auto inline-block">
            <Button variant="secondary">View More Projects</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
