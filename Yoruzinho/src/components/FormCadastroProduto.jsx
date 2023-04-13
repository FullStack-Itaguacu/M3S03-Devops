import React from "react";
import { useState, useRef } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import axios from "axios";

const FormCadastroProduto = () => {
  const [validated, setValidated] = useState(false);
  const formCadPrdRef = useRef(null);

  //funcao para submeter formulario com axios e json-server
  const postProduto = (produto) => {
    axios.post('http://localhost:3000/produtos', produto)
      .then((response) => {
        alert(`Produto  ${produto.medicamento} foi adiccionado!`);

        console.log(response.data);
      })
      .catch((error) => {
        alert(`Infelizmente o roduto  ${produto.medicamento} não foi adiccionado!`);
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    let produto;
    //formulario nao valido
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    //mostra os errores dos imputs no formulario
    setValidated(true);
    event.preventDefault();

    //quando formulario e valido cria um objeto establecimiento para   ser guardado na base de dados

    if (form.checkValidity() === true) {
      event.preventDefault();
    //captura de dados do formulario para criaçao de objeto produto
  
      produto = {
        id: (event.target.elements["medicamento"].value )+ (event.target.elements["laboratorio"].value )+ (event.target.elements["dosagem"].value),
        medicamento: event.target.elements["medicamento"].value,
        laboratorio: event.target.elements["laboratorio"].value,
        dosagem: event.target.elements["dosagem"].value,
        valorUnitario: event.target.elements["valorUnitario"].value,
        tipo: event.target.elements["tipo"].value,
        descricao: event.target.elements["descricao"].value,
        //poderia se desenvolver um sistema para upload de imagem
        imagem: "https://img.freepik.com/psd-gratuitas/marca-de-medicacao-e-maquete-de-embalagem_53876-65886.jpg?w=740&t=st=1681400504~exp=1681401104~hmac=37fc5b256fc392531a8a5ce3317a2aee9b9da27aa9ea9e05436b106bda239976",

      };
      // post produto na base de dados fake json-server
      postProduto(produto);
      //limpar formulario
      setValidated(false);
      event.target.reset();
    }
  };
  // Limpa formulario utilizando referencia
  const handleLimpar = (event) => {
    event.preventDefault();
    formCadPrdRef.current.reset();
  };

  return (
    <Form
      ref={formCadPrdRef}
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <div className="d-flex justify-content-center">
        <h3>Cadastro de Medicamento</h3>
      </div>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="medicamento">
          <Form.Label>Medicamento</Form.Label>
          <Form.Control required type="text" placeholder="Nome do Medicamento" />
          <Form.Control.Feedback>OK</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor preencha este campo com nome do medicamento.
          </Form.Control.Feedback>{" "}
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="laboratorio">
          <Form.Label>Laboratório</Form.Label>
          <Form.Control required type="text" placeholder="Nome do laboratório" />
          <Form.Control.Feedback>OK</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor preencha este campo com nome do Laboratório.
          </Form.Control.Feedback>
        </Form.Group>
       
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="dosagem">
          <Form.Label>Dosagem</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Dosagem"
          />
          <Form.Control.Feedback>OK</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor preencha este campo com a Dosagem.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="tipo">
            <Form.Label>Tipo</Form.Label>
            <Form.Select required>
                <option value="">Selecione</option>
                <option value="Medicamento Controlado">Medicamento Controlado</option>
                <option value="Medicamento Comum">Medicamento Comum</option>
            </Form.Select>
            <Form.Control.Feedback>OK</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                Por favor selecione o tipo de medicamento.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="valorUnitario">
            <Form.Label>Valor Unitário</Form.Label>
            <Form.Control
                required
                type="number"
                placeholder="Valor Unitário"
            />
            <Form.Control.Feedback>OK</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                Por favor preencha este campo com o Valor Unitário.
            </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
   
        <Form.Group as={Col} md="12" controlId="descricao">
            <Form.Label>Descrição</Form.Label>
            <Form.Control
                as="textarea"
                placeholder="Descrição"
            />
            <Form.Control.Feedback>Opcional</Form.Control.Feedback>
            </Form.Group>

      </Row>
    

      <div className="d-flex justify-content-end">
        <Button
          onClick={handleLimpar}
          className="m-0"
          variant="outline-secondary"
          type="button"
        >
          Limpar
        </Button>
        <Button className="m-0" variant="outline-success" type="submit">
          Cadastrar
        </Button>
      </div>
    </Form>
  );
};
export default FormCadastroProduto;
