import React from "react";
import CardProduto from "../components/CardProduto";
import { Row, Container } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

const ListaProdutos = () => {
  //consulta com axios ao json-server
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/produtos")
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <h1>Lista de Produtos</h1>
      <Row>
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
