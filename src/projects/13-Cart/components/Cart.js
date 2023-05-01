import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./CartItem";
import Button from 'react-bootstrap/Button';
import { useGlobalContext } from "../context/context";

const Cart = () => {

  // rinomino products in prodotti
  const{products: prodotti, deleteAll} = useGlobalContext();

  return (

    <Container className="mt-5">

      <Row sm={5} md={5} className="text-center text-white text-uppercase">
        <Col>Items</Col>
        <Col className="text-start">Nome</Col>
        <Col>Qty</Col>
        <Col>Prezzo</Col>
        <Col>
          <Button variant="link" onClick={deleteAll}>
            <FontAwesomeIcon icon={faCartArrowDown} className="color-icon fs-4" />
          </Button>
        </Col>
      </Row>

      <hr className="text-white" />

      {
        prodotti && prodotti.map((prodotto) => {
          return (

            <CartItem key={prodotto._id}  {...prodotto} />

          )
        })
      }


    </Container>
  )
};

export default Cart;
