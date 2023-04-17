import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalProduto = ({
  medicamento,
  laboratorio,
  dosagem,
  valorUnitario,
  tipo,
  descricao = "",
}) => {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  return (
    <>
        <Button variant="secondary" onClick={() => handleShow()}>
          Ver mais
        </Button>

      <Modal show={show} fullscreen={false} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{medicamento}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{`Descriçao : ${descricao}`}</Modal.Body>
        <Modal.Body>{`Laboratorio : ${laboratorio}`}</Modal.Body>
        <Modal.Body>{`Dosagem : ${dosagem}`}</Modal.Body>
        <Modal.Body>{`Valor Unitario : R$ ${valorUnitario}`}</Modal.Body>
        <Modal.Body>{`Tipo : ${tipo}`}</Modal.Body>
      </Modal>
    </>
  );
};

export default ModalProduto;
