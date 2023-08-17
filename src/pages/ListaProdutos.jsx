import React from "react";
import CardProduto from "../components/CardProduto";
import { Row, Container, Form, Button, InputGroup } from "react-bootstrap";
import { useEffect } from "react";
import { useContexto } from "../context/useContexto";

const ListaProdutos = () => {
  const {
    produtos,
    produtoBuscados,
    handleSubmitBuscarProduto,
    getProdutos,
    setProdutoBuscados,
  } = useContexto();

  useEffect(() => {
    /*quando monta o componente, 
    carrega os produtos e limpa
    o array de produtos buscados*/
    getProdutos();
    setProdutoBuscados([]);
  }, []);

  return (
    <Container>
      <h1>Buscar Medicamento</h1>
      <Form onSubmit={handleSubmitBuscarProduto}>
        <Row>
          <InputGroup className="mb-3">
            <Form.Control
              id="medicamentoBuscado"
              placeholder="Nome do Medicamento"
              aria-label="Nome do Medicamento"
              required
            />
            <Button variant="outline-secondary" id="btnBuscar" type="submit">
              Buscar
            </Button>
          </InputGroup>
        </Row>
      </Form>
      <Row>
        {/*renderizado condicional caso o array produtosBuscados tenha pelo menos um produto */}
        {produtoBuscados.length > 0 && <h1>Produtos Encontrados</h1>}
        {produtoBuscados.map((produto) => (
          <CardProduto
            key={produto.medicamento + produto.dosagem + produto.laboratorio}
            medicamento={produto.medicamento}
            dosagem={produto.dosagem}
            laboratorio={produto.laboratorio}
            valorUnitario={produto.valorUnitario}
            tipo={produto.tipo}
            descricao={produto.descricao}
            imagem={produto.imagem}
          />
        ))}
      </Row>
      <Row>
        <h1>Lista de todos os Produtos</h1>
        {produtos.map((produto) => (
          <CardProduto
            key={produto.medicamento + produto.dosagem + produto.laboratorio}
            medicamento={produto.medicamento}
            dosagem={produto.dosagem}
            laboratorio={produto.laboratorio}
            valorUnitario={produto.valorUnitario}
            tipo={produto.tipo}
            descricao={produto.descricao}
            imagem={produto.imagem}
          />
        ))}
      </Row>
    </Container>
  );
};

export default ListaProdutos;
