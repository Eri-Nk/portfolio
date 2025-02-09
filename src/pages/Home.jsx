import imageOne from "../assets/home-bg/imageOne.jpg";
import imageTwo from "../assets/home-bg/imageTwo.jpg";
import imageThree from "../assets/home-bg/imageThree.jpeg";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Button from "../components/Button";

const homeImages = [imageOne, imageTwo, imageThree];

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(true);
      setSlideIndex((prevIndex) =>
        prevIndex === homeImages.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => {
        setFade(false);
      }, 300);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      <div className="min-h-screen bg-center bg-cover transition-opacity duration-300 ease-linear relative flex items-center p-4">
        {homeImages.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`w-full absolute top-0 left-0 h-screen object-cover transition-opacity duration-[3000ms] ${
              slideIndex === index ? "opacity-100" : "opacity-0"
            }`}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <TypeAnimation
        sequence={[
          "Code. Learn. Build. Repeat. \nHi, I'm Erifamonyo 'Eri' Chukwuma Nkobo, a developer on a journey of endless learning and growth. \nLet's make something incredible!",
          4000,
          "",
        ]}
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

      <div className="m-6 flex flex-col md:flex-row items-center justify-center gap-4  md:justify-evenly">
        <a href="/projects" className="w-full md:w-auto">
          <Button variant="secondary"> View Projects</Button>
        </a>
        <a href="/contact" className="w-full md:w-auto">
          <Button variant="secondary">Contact Me</Button>
        </a>
      </div>
    </div>
  );
};

export default Home;
