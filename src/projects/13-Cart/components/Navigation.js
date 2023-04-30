import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from 'react-bootstrap/Badge';



const Navigation = () => {
  return (

    <Navbar bg="dark" variant="dark" className="position-relative">
      <Container>
        <Navbar.Brand href="#home">CartShop</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#home" className="me-3">
            <FontAwesomeIcon icon={faCartShopping} />
            <Badge bg="danger" className="ms-1 position-absolute top-0 mt-2" >0</Badge>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
};

export default Navigation;
