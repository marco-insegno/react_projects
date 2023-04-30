import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons"

const CartItem = ({ id, name, price, image, countInStock }) => {
  return (
    <>
      <Row sm={5} md={5} className="text-center text-white my-5">
        <Col>
          <img src={image} alt={name} className="img-fluid" width="100%" />
        </Col>
        <Col className="d-flex align-items-center text-start">{name}</Col>
        <Col className="d-flex align-items-center justify-content-center">
          <div>

              <FontAwesomeIcon icon={faCirclePlus} className="text-success fs-4" />

            <p className="my-2">{countInStock}</p>

            <FontAwesomeIcon icon={faCircleMinus} className="text-danger fs-4" />

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
