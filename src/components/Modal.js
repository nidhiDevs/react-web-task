import React from 'react';
import "./Model.css"

const Modal = ({ isOpen, onClose,width, height, children }) => {
  if (!isOpen) return null;
  const modalStyle = {
    width: width || 'auto',
    height: height || 'auto',
  };

  return (
    <div className="modal-overlay">
      <div className="modal" style={modalStyle}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
