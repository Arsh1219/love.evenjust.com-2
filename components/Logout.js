import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useUserContext } from "../context/state";

export const Logout = () => {
  const [modalShow, setShowModal] = useState(false);

  const { logout } = useUserContext();

  return (
    <>
      <button
        className="mr-2 text-lg bg-transparent outline-none"
        onClick={() => setShowModal(true)}
      >
        Logout
      </button>

      <Modal
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-4">
          <p>Are you sure you want to logout? This will delete all data.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={logout} className="px-4">
            Yes
          </Button>
          <Button
            onClick={() => setShowModal(false)}
            className="bg-danger ml-4 px-4"
          >
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
