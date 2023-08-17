import React from 'react'
import { Row, Col, Figure } from 'react-bootstrap'
const ErrorImage = ({src,  numeroError, textoDescriptivo}) => {
  return (

    <Row style={{ height: "100vh" }} className="align-items-center">
    <Col md={6} className="mx-auto align-itens-center">
    <Figure >
        <Figure.Image
          width={800}
          height={800}
          alt={`Error ${numeroError} - ${textoDescriptivo}`}
          src={src}
        />
        <Figure.Caption>{`Error ${numeroError} - ${textoDescriptivo}`}</Figure.Caption>
      </Figure>
    </Col>
   
  </Row>  )
}

export default ErrorImage