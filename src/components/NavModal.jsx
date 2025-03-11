import Modal from "react-modal";
import NavLinks from "./NavLinks";
import { motion, AnimatePresence } from "motion/react";

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
    position: "absolute",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(5px)",
    zIndex: "199",
  },
};
Modal.setAppElement("#root");

const NavModal = ({ isOpen, onClose }) => {
  const handleClose = () => {
    setTimeout(() => {
      onClose();
    }, 300);
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={handleClose}
          style={customStyles}
          contentLabel="Navigation Modal"
        >
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute top-2 right-4 text-white text-2xl"
            >
              &times;
            </button>
            <NavLinks onClose={onClose} isOpen={isOpen} />
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default NavModal;
