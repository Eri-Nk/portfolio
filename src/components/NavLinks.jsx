import { NavLink } from "react-router";

const NavLinks = ({ isNavDropdownOpen, setIsNavDropdownOpen, stage }) => {
  return (
    <ul
      className={`list-none ${
        isNavDropdownOpen
          ? "block modal-class absolute top-[100%] left-[20%] right-[20%] bg-primary"
          : "hidden md:flex gap-8 flex-row text-xl"
      }`}
    >
      {["Home", "About", "Projects", "Skills", "Contact"].map((text, idx) => (
        <li
          key={idx}
          className={`${
            isNavDropdownOpen && stage === "enter" ? "modal-animation" : ""
          } ${
            stage === "exit" ? "modal-exit" : ""
          } last:border-b-0 border-b-2  md:border-0`}
        >
          <NavLink
            to={`/${text.toLowerCase()}`}
            className={({
              isActive,
            }) => `transition-all duration-300 py-3 border-b-2
              ${
                isActive
                  ? "text-gray-900 hover:text-gray-600 font-semibold modal-active  border-b-gray-900 "
                  : "text-gray-600 border-b-transparent hover:text-gray-800  hover:border-b-gray-600"
              }`}
            onClick={() => {
              setIsNavDropdownOpen(false);
            }}
          >
            {text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
