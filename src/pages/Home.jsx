import imageOne from "../assets/home-bg/imageOne.jpg";
import imageTwo from "../assets/home-bg/imageTwo.jpg";
import imageThree from "../assets/home-bg/imageThree.jpeg";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

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
      <div
        className={`min-h-screen bg-center bg-cover transition-opacity duration-300 ease-linear 
          ${fade ? "opacity-95" : "opacity-100"} flex items-center p-4`}
        style={{ backgroundImage: `url(${homeImages[slideIndex]})` }}
      >
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
          }}
          repeat={Infinity}
          deletionSpeed={70}
        />
      </div>
    </div>
  );
};

export default Home;
