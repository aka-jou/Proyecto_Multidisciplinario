import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { SignupFormDemo } from "./Form";
import "../components/Cuestionario.css";

function CuestionarioX() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Cuestionario">
      <Button className="RegistrateAquiBoton" variant="primary" onClick={handleShow}>
        Registrarse aquí
      </Button>
      
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignupFormDemo />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary">Enviar</Button>
        </Modal.Footer>
      </Modal>
      
      
    </div>
  );
}

export default CuestionarioX;
