import React from "react";
import CardProduto from "../components/CardProduto";
import { Row, Container } from "react-bootstrap";

const ListaProdutos = () => {
  //consulta fake a servidor retorna objeto com array de produtos
  const produtos = [
    {
      medicamento: "Dipirona",
      laboratorio: "Bayer",
      dosagem: "500mg",
      valorUnitario: 5.0,
      tipo: "Medicamento Comum",
      descricao:
        "Dipirona é um medicamento analgésico e antipirético, usado no tratamento de dores leves a moderadas e febre.",
      imagem:
        "https://img.freepik.com/psd-gratuitas/marca-de-medicacao-e-maquete-de-embalagem_53876-65886.jpg?w=740&t=st=1681400504~exp=1681401104~hmac=37fc5b256fc392531a8a5ce3317a2aee9b9da27aa9ea9e05436b106bda239976",
    },
    {
      medicamento: "Dipirona",
      laboratorio: "Bayer",
      dosagem: "500mg",
      valorUnitario: 5.0,
      tipo: "Medicamento Comum",
      descricao:
        "Dipirona é um medicamento analgésico e antipirético, usado no tratamento de dores leves a moderadas e febre.",
      imagem:
        "https://img.freepik.com/psd-gratuitas/marca-de-medicacao-e-maquete-de-embalagem_53876-65886.jpg?w=740&t=st=1681400504~exp=1681401104~hmac=37fc5b256fc392531a8a5ce3317a2aee9b9da27aa9ea9e05436b106bda239976",
    },
    {
      medicamento: "Dipirona",
      laboratorio: "Bayer",
      dosagem: "500mg",
      valorUnitario: 5.0,
      tipo: "Medicamento Comum",
      descricao:
        "Dipirona é um medicamento analgésico e antipirético, usado no tratamento de dores leves a moderadas e febre.",
      imagem:
        "https://img.freepik.com/psd-gratuitas/marca-de-medicacao-e-maquete-de-embalagem_53876-65886.jpg?w=740&t=st=1681400504~exp=1681401104~hmac=37fc5b256fc392531a8a5ce3317a2aee9b9da27aa9ea9e05436b106bda239976",
    },
    {
      medicamento: "Dipirona",
      laboratorio: "Bayer",
      dosagem: "500mg",
      valorUnitario: 5.0,
      tipo: "Medicamento Comum",
      descricao:
        "Dipirona é um medicamento analgésico e antipirético, usado no tratamento de dores leves a moderadas e febre.",
      imagem:
        "https://img.freepik.com/psd-gratuitas/marca-de-medicacao-e-maquete-de-embalagem_53876-65886.jpg?w=740&t=st=1681400504~exp=1681401104~hmac=37fc5b256fc392531a8a5ce3317a2aee9b9da27aa9ea9e05436b106bda239976",
    },
    {
      medicamento: "Dipirona",
      laboratorio: "Bayer",
      dosagem: "500mg",
      valorUnitario: 5.0,
      tipo: "Medicamento Comum",
      descricao:
        "Dipirona é um medicamento analgésico e antipirético, usado no tratamento de dores leves a moderadas e febre.",
      imagem:
        "https://img.freepik.com/psd-gratuitas/marca-de-medicacao-e-maquete-de-embalagem_53876-65886.jpg?w=740&t=st=1681400504~exp=1681401104~hmac=37fc5b256fc392531a8a5ce3317a2aee9b9da27aa9ea9e05436b106bda239976",
    },
    {
      medicamento: "Dipirona",
      laboratorio: "Bayer",
      dosagem: "500mg",
      valorUnitario: 5.0,
      tipo: "Medicamento Comum",
      descricao:
        "Dipirona é um medicamento analgésico e antipirético, usado no tratamento de dores leves a moderadas e febre.",
      imagem:
        "https://img.freepik.com/psd-gratuitas/marca-de-medicacao-e-maquete-de-embalagem_53876-65886.jpg?w=740&t=st=1681400504~exp=1681401104~hmac=37fc5b256fc392531a8a5ce3317a2aee9b9da27aa9ea9e05436b106bda239976",
    },
    {
      medicamento: "Dipirona",
      laboratorio: "Bayer",
      dosagem: "500mg",
      valorUnitario: 5.0,
      tipo: "Medicamento Comum",
      descricao:
        "Dipirona é um medicamento analgésico e antipirético, usado no tratamento de dores leves a moderadas e febre.",
      imagem:
        "https://img.freepik.com/psd-gratuitas/marca-de-medicacao-e-maquete-de-embalagem_53876-65886.jpg?w=740&t=st=1681400504~exp=1681401104~hmac=37fc5b256fc392531a8a5ce3317a2aee9b9da27aa9ea9e05436b106bda239976",
    },
    {
      medicamento: "Dipirona",
      laboratorio: "Bayer",
      dosagem: "500mg",
      valorUnitario: 5.0,
      tipo: "Medicamento Comum",
      descricao:
        "Dipirona é um medicamento analgésico e antipirético, usado no tratamento de dores leves a moderadas e febre.",
      imagem:
        "https://img.freepik.com/psd-gratuitas/marca-de-medicacao-e-maquete-de-embalagem_53876-65886.jpg?w=740&t=st=1681400504~exp=1681401104~hmac=37fc5b256fc392531a8a5ce3317a2aee9b9da27aa9ea9e05436b106bda239976",
    },
    {
      medicamento: "Dipirona",
      laboratorio: "Bayer",
      dosagem: "500mg",
      valorUnitario: 5.0,
      tipo: "Medicamento Comum",
      descricao:
        "Dipirona é um medicamento analgésico e antipirético, usado no tratamento de dores leves a moderadas e febre.",
      imagem:
        "https://img.freepik.com/psd-gratuitas/marca-de-medicacao-e-maquete-de-embalagem_53876-65886.jpg?w=740&t=st=1681400504~exp=1681401104~hmac=37fc5b256fc392531a8a5ce3317a2aee9b9da27aa9ea9e05436b106bda239976",
    },
    {
      medicamento: "Aspirina",
      laboratorio: "Bayer",
      dosagem: "500mg",
      valorUnitario: 5.0,
      tipo: "Medicamento raroi",
      descricao:
        "Dipirona é um medicamento analgésico e antipirético, usado no tratamento de dores leves a moderadas e febre.",
      imagem:
        "https://img.freepik.com/psd-gratuitas/marca-de-medicacao-e-maquete-de-embalagem_53876-65886.jpg?w=740&t=st=1681400504~exp=1681401104~hmac=37fc5b256fc392531a8a5ce3317a2aee9b9da27aa9ea9e05436b106bda239976",
    },
  ];
  return (
    <Container>
      <h1>Lista de Produtos</h1>
      <Row>
        {produtos.map((produto) => (
          <CardProduto
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
