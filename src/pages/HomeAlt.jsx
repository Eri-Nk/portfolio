import imageOne from "../assets/home-bg/imageOne.jpg";
import imageTwo from "../assets/home-bg/imageTwo.jpg";
import imageThree from "../assets/home-bg/imageThree.jpeg";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const homeImages = [imageOne, imageTwo, imageThree];

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex === homeImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      <div
        className={`min-h-screen bg-center bg-cover transition-opacity duration-300 ease-linear relative flex items-center p-4`}
      >
        {homeImages.map((img, index) => {
          /* 
          - Display all images
          - Make them absolutely positioned and stacked on each other
          - Set 100% opacity on the current slide
          - Set 0% opacity on inactive slides
          - Set transition duration for each image the your desired fade duration
           */
          return (
            <img
              src={img}
              className={`w-full absolute top-0 left-0 h-screen transition-opacity duration-[3000ms] ${
                slideIndex === index ? "opacity-100" : "opacity-0"
              }`}
            />
          );
        })}
        <TypeAnimation
          sequence={[
            "Code. Learn. Build. Repeat. \nI'm Erifamonyo 'Eri' Chukwuma Nkobo, a developer on a journey of endless learning and growth. \nLet's make something incredible!",
            4000,
            "",
          ]}
          wrapper="span"
          speed={{ type: "keyStrokeDelayInMs", value: 90 }}
          style={{
            fontSize: "2rem",
            display: "block",
            color: "white",
            whiteSpace: "pre-line",
            zIndex: 10,
          }}
          repeat={Infinity}
          deletionSpeed={70}
        />
      </div>
    </div>
  );
};

export default Home;
