import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { products } from '../products'
import CartItem from "./CartItem";

const Cart = () => {

  console.log(products);
  return (

    <Container className="mt-5">

      <Row sm={5} md={5} className="text-center text-white text-uppercase">
        <Col>Items</Col>
        <Col className="text-start">Nome</Col>
        <Col>Qty</Col>
        <Col>Prezzo</Col>
        <Col>
          <FontAwesomeIcon icon={faCartArrowDown} className="color-icon fs-4" />
        </Col>
      </Row>

      <hr className="text-white" />

      

      {
        products && products.map((product) => {
          return (

            <CartItem key={product._id}  {...product}/>

          )
        })
      }


    </Container>
  )
};

export default Cart;
