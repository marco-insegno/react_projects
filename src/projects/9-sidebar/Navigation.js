import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import { links } from "./links";

import { useGlobalContext } from "./context";

const Navigation = () => {

  const { isSidebarOpen, openSidebar, closeSidebar } = useGlobalContext()

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '200px' }}
              navbarScroll
            >

              {
                links && links.map((link) => {
                  return (

                    <Nav.Link key={link.id} href={link.url} className="text-capitalize">{link.text}</Nav.Link>

                  )
                })
              }

            </Nav>
            {
              isSidebarOpen && <Button variant="info" onClick={closeSidebar}>HideSidebar</Button>
            }

            {
              isSidebarOpen === false && <Button variant="success" onClick={openSidebar}>ShowSidebar</Button>
            }



          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
};

export default Navigation;
