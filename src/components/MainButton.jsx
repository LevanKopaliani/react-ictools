import { useState } from "react";
import "../styles/MainButton.scss";
import Modal from "./Modal/Modal";
import { handleModal, closeModal } from "./Modal/Modal";

const MainButton = ({ text, type, modal = false }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="MainButton">
      <button
        className={type}
        onClick={modal ? () => setOpenModal(true) : null}
      >
        {text}
      </button>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default MainButton;
