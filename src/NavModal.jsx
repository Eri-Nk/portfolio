import Modal from "react-modal";
import NavLinks from "./NavLinks";

const customStyles = {
  content: {
    top: "0",
    left: "30%",
    right: "0",
    bottom: "0",
    margin: "0",
    border: "none",
    padding: "7rem 0",
    zIndex: "200",
    textAlign: "center",
    backgroundColor: "#06163b",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(5px)",
    zIndex: "199",
  },
};
Modal.setAppElement("#root");

const NavModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Navigation Modal"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-2 right-4 text-white text-2xl"
      >
        &times;
      </button>
      <NavLinks onClose={onClose} isOpen={isOpen} />
    </Modal>
  );
};

export default NavModal;
