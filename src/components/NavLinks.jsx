import { NavLink } from "react-router";

const NavLinks = ({ isNavDropdownOpen, setIsNavDropdownOpen, stage }) => {
  return (
    <ul
      className={`list-none ${
        isNavDropdownOpen
          ? "block modal-class absolute top-[100%] left-[20%] right-[20%] bg-primary"
          : "hidden md:flex gap-4 flex-row"
      }`}
    >
      {["Home", "About", "Projects", "Skills", "Contact"].map((text, idx) => (
        <li
          key={idx}
          className={`${
            isNavDropdownOpen && stage === "enter" ? "modal-animation" : ""
          } ${
            stage === "exit" ? "modal-exit" : ""
          } border-b-2 border-gray-400 last:border-b-0 md:border-0`}
        >
          <NavLink
            to={`/${text.toLowerCase()}`}
            className={({
              isActive,
            }) => `hover:text-gray-900 hover:font-semibold transition-colors duration-300
              ${
                isActive
                  ? "text-gray-900 font-semibold modal-active"
                  : "text-gray-600"
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
