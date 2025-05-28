import MapLoader from "../components/MapLoader";
import PageBanner from "../components/PageBanner";
import contactBg from "../assets/bg-photos/contact_bg.jpg";
import { HiPaperAirplane } from "react-icons/hi";
import ContactForm from "../components/ContactForm";
import PageHelmet from "../components/PageHelmet";

const Contact = () => {
  return (
    <>
      <PageHelmet
        title="Contact Me | Eri Portfolio"
        content="Feel free to reach out"
      />
      <PageBanner title="Contact Me" bg={contactBg} />
      <div>
        <div className="text-center px-4 py-5 max-w-3xl mx-auto space-y-3 ">
          <p>
            Hello there, and welcome to the contact zone! Whether you're
            brimming with ideas, have an opportunity to share, or just want to
            say hi, you're in the right place. You can reach out through the
            form or tap into any of the links neatly placed in the footer —
            Gmail, WhatsApp, or LinkedIn — all just a click away.
          </p>

          <p>
            The design is intentionally clean and intuitive, making it
            effortless to start a conversation. So, don’t be shy — I’m always
            open to exciting projects, fresh collaborations, or a simple
            friendly chat.
          </p>
        </div>

        {/* <div className="w-[90%] max-w-lg mx-auto"> */}
        <div className="flex flex-col gap-8 justify-center align-middle ">
          <h3 className="text-xl font-semibold text-center py-4">
            Feel free to send a message!
            <HiPaperAirplane className="text-blue-500 rotate-45 inline ml-2 align-baseline" />
          </h3>

          <ContactForm />
        </div>

        <div className="px-6 py-16 ">
          <MapLoader />
        </div>
      </div>
    </>
  );
};

export default Contact;
