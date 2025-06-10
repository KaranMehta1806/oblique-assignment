import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const overlayStyles = {
  backgroundColor: 'transparent',
};

const contentStyles = {
  top: '50%', left: '50%',
  right: 'auto', bottom: 'auto',
  transform: 'translate(-50%, -50%)',
  padding: '20px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  minWidth: '600px',
};

export default function MyModal({ open, onClose, children }) {
  return (
    <Modal
      isOpen={open}
      onRequestClose={onClose}
       shouldCloseOnOverlayClick={false}
      style={{
        overlay: overlayStyles,
        content: contentStyles
      }}
    >
      {children}
      <button
        onClick={onClose}
        className="mt-4 bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
      >
        Close
      </button>
    </Modal>
  );
}
