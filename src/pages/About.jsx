import PageBanner from "../components/PageBanner";
import aboutBg from "../assets/bg-photos/about_bg.jpg";
import ContactForm from "../components/ContactForm";
import { TbHandFingerDown } from "react-icons/tb";
import AboutProfilePhoto from "../assets/projects/AboutProfilePhoto.jpg";
import PageHelmet from "../components/PageHelmet";

const About = () => {
  return (
    <div>
      <PageHelmet title="About | Eri Portfolio" content="A little about Eri" />
      <PageBanner title="About me" bg={aboutBg} />
      <div className="flex flex-col md:clear-both md:block p-7 dark:text-[#ccd6dd]">
        <div
          className="md:float-left rounded-lg w-full md:w-1/3 h-80 mb-4 md:mr-6 overflow-hidden"
          style={{ backgroundColor: "#d9d7d7" }}
        >
          <img
            src={AboutProfilePhoto}
            alt="Profile picture"
            className="w-full h-full object-cover"
          />
        </div>

        <p>
          Hi, I’m a Chemical Engineering graduate from the University of Benin
          with a not-so-secret love for all things tech. While I spent years
          learning how to balance chemical equations, I found myself
          increasingly fascinated by how software works — from the magic behind
          your browser rendering a page to the logic that powers your favorite
          apps. That curiosity quickly spiraled into a full-blown passion for
          software development, and I’ve been exploring code ever since.
        </p>
        <p className="py-3">
          What really drew me in wasn’t just the coding itself, but the how and
          why behind it — like peeling back the layers of a machine to
          understand what makes it tick. Now, I channel that same analytical
          mindset I honed in engineering into building sleek, functional, and
          user-friendly software solutions. Whether I’m debugging an issue or
          bringing a UI to life, I approach it with the same curiosity that
          first got me hooked.
        </p>
        <p className="py-3">
          Looking ahead, one of my biggest goals is to bridge both of my worlds
          — integrating software development into chemical engineering. I’m
          excited about the possibilities of using tech to optimize processes,
          analyze data, and build smarter systems within engineering spaces. And
          when I’m not coding or scheming up futuristic ideas, you’ll likely
          find me watching sports or getting lost in a Terry Pratchett novel —
          because a clever story and a good laugh are always part of the plan.
        </p>
      </div>

      <div className="flex flex-col gap-4 justify-center align-middle mb-16 ">
        <p className="font-bold text-base md:text-lg text-center dark:text-[#ccd6dd]">
          <span className="block sm:inline">
            Waste no time, send a message.{" "}
          </span>
          <span className="block sm:inline">
            Let's make something incredible
            <TbHandFingerDown className="inline text-secondary text-lg mx-1 animate-bounce" />
            .
          </span>
        </p>

        <ContactForm />
      </div>
    </div>
  );
};

export default About;
