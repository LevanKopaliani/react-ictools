import { useState } from "react";
import "./Modal.scss";
import CloseImg from "./closebutton.png";
import ModalImage from "./image.png";
import MainButton from "../MainButton";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="overlay" onClick={onClose}>
      <div className="wrapper">
        <div className="container">
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <p className="closebutton" onClick={onClose}>
              <img src={CloseImg} alt="close" />
            </p>
            <div className="content">
              <div className="content-img">
                <img src={ModalImage} alt="" />
              </div>
              <div className="content-info">
                <p className="date">July 27, 2022</p>
                <h1 className="content-title">Microsoft Production Summit</h1>
                <p className="content-subtitle">by NVIDIA & Unreal Engine</p>
                <p className="content-text">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati
                </p>
                <MainButton text={"go to event"} type={"modal-button"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

// export { handleModal, closeModal };
