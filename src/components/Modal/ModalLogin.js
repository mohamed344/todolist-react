import React from 'react';
import Modal from 'react-modal';
import './ModalLogin.css'

const ModalLogin = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Login Modal"
    >
      <h2>Login</h2>
      {/* Your login form elements here */}
    </Modal>
  );
};

export default ModalLogin;

