import React from "react";
import "../Modal.css";

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
        <div className="body">
          <p>The email has been successfully sent!</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
