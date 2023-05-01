import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from 'react-bootstrap/Badge';
import { useGlobalContext } from "../context/context";



const Navigation = () => {

  const { itemCounter} = useGlobalContext()

  return (

    <Navbar bg="dark" variant="dark" sticky="top" >
      <Container>
        <Navbar.Brand href="#home">CartShop</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#home" className="me-3">
            <FontAwesomeIcon icon={faCartShopping} />
            {
              itemCounter > 0 && <Badge bg="danger" className="ms-1 position-absolute top-0 mt-2" >{itemCounter}</Badge>
            }
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
};

export default Navigation;
