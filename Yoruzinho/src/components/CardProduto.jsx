import React from 'react'
import { Card, Col } from 'react-bootstrap';

const CardProduto = ({medicamento, laboratorio, dosagem, valorUnitario, tipo, descricao='', imagem}) => {
    const produto = {
        medicamento:medicamento,
        laboratorio:laboratorio,
        dosagem: dosagem,
        valorUnitario: valorUnitario,
        tipo: tipo,
        descricao: descricao,
        imagem: imagem,
      };
  return (
    <>
        <Card as={Col} md="3">
            <Card.Img variant="top" src={produto.imagem} />
            <Card.Body>
                <Card.Title>{produto.medicamento}</Card.Title>
                <Card.Text>
                    {produto.descricao}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">R$ {produto.valorUnitario}</small>
            </Card.Footer>
        </Card>

    </>
  )





















}

export default CardProduto