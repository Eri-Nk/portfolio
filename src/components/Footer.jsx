import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    href: "https://wa.me/+234806334756",
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    external: true,
  },
  {
    href: "https://x.com/lord_eriko",
    icon: <FaXTwitter />,
    label: "Twitter",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/eri-nkobo",
    icon: <FaLinkedin />,
    label: "LinkedIn",
    external: true,
  },
  {
    href: "https://github.com/Eri-Nk",
    icon: <FaGithub />,
    label: "GitHub",
    external: true,
  },
  {
    href: "mailto:erifankobo@gmail.com",
    icon: <FaEnvelope />,
    label: "Email",
    external: false,
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4 px-4">
      <p className="text-center text-base md:text-3xl mb-6">
        Port Harcourt, Nigeria
      </p>
      <div className="max-w-full mx-auto flex flex-col gap-14 ">
        <div className="flex items-center gap-6 text-xl">
          {socials.map(({ href, icon, label, external }, index) => (
            <a
              key={index}
              href={href}
              aria-label={label}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-gray-400 hover:text-gray-300 transition-colors text-lg md:text-3xl"
            >
              {icon}
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-300 self-end ">
          &copy; {new Date().getFullYear()} Eriko. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
