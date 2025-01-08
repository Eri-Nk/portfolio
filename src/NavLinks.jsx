import { NavLink } from "react-router";

const NavLinks = ({ isOpen, onClose }) => {
  return (
    <ul
      className={`list-none ${
        isOpen ? "block modal-class" : "flex gap-4 flex-row"
      }`}
    >
      {["Home", "About", "Projects", "Skills", "Contact"].map((text, idx) => (
        <li key={idx}>
          <NavLink
            to={`/${text.toLowerCase()}`}
            className={({ isActive }) =>
              isActive ? " text-gray-900 font-semibold" : " text-gray-500 "
            }
            onClick={onClose}
          >
            {text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
