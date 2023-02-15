import React from "react";
import { Modal } from "react-bootstrap";
import LoginSignup from "../Pages/LoginSignup/LoginSignup";

const LoginModal = ({ show, handleClose }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        centered
        className="position-relatives"
        size="lg"
      >
        <Modal.Header
          closeButton
          className="position-absolute bottom-100 start-100 border-0 bg-light rounded-circle d-inline p-0 m-0 w-0 h-0 text-center fs-6 pe-1 pt-1"
        ></Modal.Header>
        <Modal.Header
          style={{ backgroundColor: "#EFFFF4" }}
          className="border-0"
        >
          {" "}
          <p className="text-center m-auto text-success">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
        </Modal.Header>
        <Modal.Body>
          <LoginSignup />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;
