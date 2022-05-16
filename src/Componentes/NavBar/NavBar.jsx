import React from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >Rouse Distribuciones</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" >
                            <Nav.Link as={Link} to={"/Home"}> Home</Nav.Link>
                            <Nav.Link as={Link} to={"/Nosotros"}> Nosotros</Nav.Link>
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to={"/categoria/Descartables"}> Descartables </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/categoria/Reutilizables"}> Reutilizables </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to={"/Productos"}> Todos </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to={"/Contacto"}> Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget />
                </Container>
            </Navbar>
        </>
    )
}