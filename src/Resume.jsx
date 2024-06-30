import React from "react";
import { Modal, Button } from "react-bootstrap";
import resume from "./Assets/Resume.pdf"; // Make sure to update this path

function ResumeModal({ showModal, setShowModal, handleClose }) {
  function handleClose() {
    setShowModal(false);
  }
  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>My Resume</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          src={resume}
          title="Resume"
          style={{ width: "100%", height: "400px" }}
        >
          My Resume
        </iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" href={resume} download>
          Download
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ResumeModal;
