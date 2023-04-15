import React, { useEffect, useRef } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { useContexto } from "../context/useContexto";

const FormCadastroEstablecimento = () => {
  const formCadEstRef = useRef(null);
  const { handleSubmitEstablecimento, handleLimpar, validated, setValidated } = useContexto();

  useEffect(() => {
    setValidated(false);
  }, []);

  return (
    <Form
      ref={formCadEstRef}
      noValidate
      validated={validated}
      onSubmit={handleSubmitEstablecimento}
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
        <Form.Group as={Col} md="4" controlId="email">
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
          <Form.Control.Feedback>OK</Form.Control.Feedback>const
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
          <Form.Control
            required
            type="number"
            step="0.0001"
            placeholder="Latitude"
          />
          <Form.Control.Feedback>OK</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor preencha este campo com Latitude.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="longitude">
          <Form.Label>Longitude</Form.Label>
          <Form.Control
            required
            type="number"
            step="0.0001"
            placeholder="Longitude"
          />
          <Form.Control.Feedback>OK</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor preencha este campo com Longitude.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <div className="d-flex justify-content-end">
        <Button
          onClick={(e)=>handleLimpar(e,formCadEstRef)}
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
