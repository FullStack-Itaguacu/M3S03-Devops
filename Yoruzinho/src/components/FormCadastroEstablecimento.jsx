import React from "react";
import { useState, useRef } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";

const FormCadastroEstablecimento = () => {
  const [validated, setValidated] = useState(false);
  const formCadEstRef = useRef(null);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    let establecimento;
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
      //captura de dados do formulario para criaçao de objeto establecimento
      establecimento = {
        razaoSocial: event.target.elements["razãosocial"].value,
        cnpj: event.target.elements["cnpj"].value,
        nomeFantasia: event.target.elements["nomeFantasia"].value,
        eMail: event.target.elements["eMail"].value,
        telefone: event.target.elements["telefone"].value,
        celular: event.target.elements["celular"].value,
        cep: event.target.elements["cep"].value,
        logradouro: event.target.elements["logradouro"].value,
        numero: event.target.elements["numero"].value,
        complemento: event.target.elements["complemento"].value,
        bairro: event.target.elements["bairro"].value,
        cidade: event.target.elements["cidade"].value,
        estado: event.target.elements["estado"].value,
        latitude: event.target.elements["latitude"].value,
        longitude: event.target.elements["longitude"].value,
      };
      // Precisa modificar para chamar uma
      // funcao  addicionar um establecimento
      // ao banco de dados sejaLocalStorage ou json-server
      console.log(establecimento);
      alert(`Establecimento  ${establecimento.nomeFantasia} foi adiccionado!`);
      //limpar formulario
      setValidated(false);
      event.target.reset();
    }
  };
  // Limpa formulario utilizando referencia
  const handleLimpar = (event) => {
    event.preventDefault();
    formCadEstRef.current.reset();
  };

  return (
    <Form
      ref={formCadEstRef}
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <div className="d-flex justify-content-center">
        <h3>Cadastro de Establecimento</h3>
      </div>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="razãosocial">
          <Form.Label>Razão Social</Form.Label>
          <Form.Control required type="text" placeholder="Razão Social" />
          <Form.Control.Feedback>OK</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor preencha este campo com a razão social.
          </Form.Control.Feedback>{" "}
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="cnpj">
          <Form.Label>CNPJ</Form.Label>
          <Form.Control required type="number" placeholder="999999999999" />
          <Form.Control.Feedback>OK</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor preencha este campo com o numero de CNPJ.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="nomeFantasia">
          <Form.Label>Nome Fantasia</Form.Label>
          <Form.Control required type="text" placeholder="Nome Fantasia" />
          <Form.Control.Feedback>OK</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor preencha este campo com o nome fantasia.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="eMail">
          <Form.Label>E-Mail</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="example@dominio.com"
          />
          <Form.Control.Feedback>OK</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor preencha este campo com o E-mail.
          </Form.Control.Feedback>{" "}
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="telefone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="number" placeholder="DDNNNNNNNNN" />
          <Form.Control.Feedback>Opcional</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="celular">
          <Form.Label>Celular</Form.Label>
          <Form.Control required type="number" placeholder="DDNNNNNNNNN" />
          <Form.Control.Feedback>OK</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor preencha este campo com o numero de Celualr.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="cep">
          <Form.Label>CEP</Form.Label>
          <Form.Control required type="number" placeholder="99999999" />
          <Form.Control.Feedback>OK</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor preencha este campo com o CEP.
          </Form.Control.Feedback>{" "}
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="logradouro">
          <Form.Label>Logradouro</Form.Label>
          <Form.Control required type="text" placeholder="Logradouro" />
          <Form.Control.Feedback>OK</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor preencha este campo com o Logradouro.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="numero">
          <Form.Label>Numero</Form.Label>
          <Form.Control required type="number" placeholder="9999" />
          <Form.Control.Feedback>OK</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor preencha este campo com o Numero.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="bairro">
          <Form.Label>Bairro</Form.Label>
          <Form.Control required type="text" placeholder="Bairro" />
          <Form.Control.Feedback>OK</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor preencha este campo com o Bairro.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="cidade">
          <Form.Label> Cidade</Form.Label>
          <Form.Control required type="text" placeholder="Cidade" />
          <Form.Control.Feedback>OK</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor preencha este campo com o Cidade.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="estado">
          <Form.Label>Estado</Form.Label>
          <Form.Control required type="text" placeholder="Estado" />
          <Form.Control.Feedback>OK</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor preencha este campo com o Estado.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="complemento">
          <Form.Label>Complemento</Form.Label>
          <Form.Control type="text" placeholder="Complemento" />
          <Form.Control.Feedback>Opcional</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="latitude">
          <Form.Label>Latitude</Form.Label>
          <Form.Control required type="number" placeholder="Latitude" />
          <Form.Control.Feedback>OK</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor preencha este campo com Latitude.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="longitude">
          <Form.Label>Longitude</Form.Label>
          <Form.Control required type="number" placeholder="Longitude" />
          <Form.Control.Feedback>OK</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor preencha este campo com Longitude.
          </Form.Control.Feedback>
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
      </div>{" "}
    </Form>
  );
};
export default FormCadastroEstablecimento;
