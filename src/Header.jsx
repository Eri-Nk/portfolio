import { RxHamburgerMenu } from "react-icons/rx";
import NavLinks from "./NavLinks";
import { useState } from "react";
import NavModal from "./NavModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-gray-300 shadow-md">
      {/* logo will replace the name */}
      <div className="my-logo flex flex-col items-start w-32 gap-1 text-green-600">
        <span className="font-bold text-xl">Eri</span>
        <span className="text-sm">Nkobo</span>
      </div>

      <nav className="nav-header p-4 hidden md:block">
        <NavLinks />
      </nav>
      {isModalOpen && <NavModal onClose={closeModal} isOpen={isModalOpen} />}

      <button
        onClick={openModal}
        className="inline-block md:hidden text-2xl"
        aria-label="Open Menu"
      >
        <RxHamburgerMenu />
      </button>
    </header>
  );
};

export default Header;
