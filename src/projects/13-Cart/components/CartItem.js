import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import Button from 'react-bootstrap/Button';

const CartItem = ({ id, name, price, image, countInStock }) => {
  return (
    <>
      <Row sm={5} md={5} className="text-center text-white my-5">
        <Col>
          <img src={image} alt={name} className="img-fluid" width="100%" />
        </Col>
        <Col className="d-flex align-items-center text-start">{name}</Col>
        {/* <Col>{countInStock}</Col> */}
        <Col className="d-flex align-items-center justify-content-center">
          <div>
            <Button variant="outline-primary" size="sm">+</Button>
            <p className="my-2">{countInStock}</p>
            <Button variant="outline-danger" size="sm">-</Button>
          </div>
        </Col >
        <Col className="fs-5 d-flex align-items-center justify-content-center">{price} €</Col>
        <Col className="d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={faTrash} className="color-icon fs-4" />
        </Col>
      </Row>
      <hr />
    </>
  )
};

export default CartItem;
