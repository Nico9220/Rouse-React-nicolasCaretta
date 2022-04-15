import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import CartWidget from "../CartWidget";

export default function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Rouse Distribuciones</Navbar.Brand>
                    <Nav className="me-auto" >
                        <Nav.Link >Home</Nav.Link>
                        <Nav.Link >Catálogo</Nav.Link>
                        <Nav.Link >Pricing</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
        </>
    )
}