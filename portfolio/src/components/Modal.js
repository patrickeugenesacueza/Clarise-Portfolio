import React from "react";
import "../Modal.css";
import {ReactComponent as Check} from "../image/check-svg.svg"

function Modal({ setOpenModal }) {
  const handleContinue = () => {
    // Add your logic for continuing here
    console.log("Continue button clicked");
    // Close the modal after handling the continuation
    setOpenModal(false);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div>
          <Check className="Check"/>
        </div>
        <div className="body">
          <div>
            <p>The email has been successfully sent!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
