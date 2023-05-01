import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons"
import Button from 'react-bootstrap/Button';
import { useGlobalContext } from "../context/context";
import formatNumber from "../utils/formatNumber";

const CartItem = ({ _id, name, price, image, qty, countInStock }) => {

  const {deleteItem, addQuantity, remQuantity} = useGlobalContext()


  const addQty = (_id) => {

    if(qty + 1 > countInStock){
      return
    }
    return addQuantity(_id)

  }

  const remQty = (_id) => {

    if(qty -1 <= 0 ){
      return deleteItem(_id)
    }
    return remQuantity(_id)

  }


  return (
    <>
      <Row sm={5} md={5} className="text-center text-white my-5">
        <Col>
          <img src={image} alt={name} className="img-fluid" width="100%" />
        </Col>
        <Col className="d-flex align-items-center text-start">{name}</Col>
        <Col className="d-flex align-items-center justify-content-center">

          <div>
            <Button variant="link" onClick={()=> addQty(_id)}>
              <FontAwesomeIcon icon={faCirclePlus} className="text-success fs-4" />
            </Button>

            <p className="my-2">{qty}</p>

            <Button variant="link" onClick={()=> remQty(_id)}>
              <FontAwesomeIcon icon={faCircleMinus} className="text-danger fs-4" />
            </Button>
          </div>

        </Col >
        <Col className="fs-5 d-flex align-items-center justify-content-center">{formatNumber(price)}</Col>
        <Col className="d-flex align-items-center justify-content-center">
          <Button variant="link">
            <FontAwesomeIcon icon={faTrash} className="color-icon fs-4" onClick={()=> deleteItem(_id)} />
          </Button>
        </Col>
      </Row>
      <hr />
    </>
  )
};

export default CartItem;
