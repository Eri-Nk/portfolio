import { RxHamburgerMenu } from "react-icons/rx";
import NavLinks from "./NavLinks";
import { Link } from "react-router";

const Header = ({
  isNavDropdownOpen,
  toggleNavDropdown,
  setIsNavDropdownOpen,
  stage,
}) => {
  return (
    <header className="flex  justify-between pl-4 py-2 pr-3 bg-gray-300 z-50 fixed top-0 inset-x-0">
      {/* logo will replace the name */}
      <Link to="/home">
        <div
          className="font-sourGummy flex justify-center align-middle flex-col w-fit  text-secondary  px-4"
          style={{ cursor: "pointer" }}
        >
          <span className="text-xl md:text-3xl pt-1 font-bold text-shadow text-center leading-none block">
            Eri
          </span>
          <span className="text-base md:text-xl tracking-widest uppercase leading-none block">
            Nkobo
          </span>
        </div>
      </Link>

      <nav className="nav-header p-4">
        <NavLinks
          isNavDropdownOpen={isNavDropdownOpen}
          setIsNavDropdownOpen={setIsNavDropdownOpen}
          stage={stage}
        />
      </nav>

      <button
        onClick={toggleNavDropdown}
        className="inline-block md:hidden text-2xl"
        aria-label="Open Menu"
      >
        <RxHamburgerMenu />
      </button>
    </header>
  );
};

export default Header;
