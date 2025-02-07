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
    <header className="flex items-center justify-between px-4 py-2 bg-gray-300 shadow-lg z-50 relative">
      {/* logo will replace the name */}
      <Link to="/home">
        <div
          className="my-logo flex flex-col items-start w-32 gap-1 text-primary"
          style={{ cursor: "pointer" }}
        >
          <span className="font-bold text-xl">Eri</span>
          <span className="text-sm">Nkobo</span>
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
