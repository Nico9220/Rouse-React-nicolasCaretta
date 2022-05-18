import React, { useContext } from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";
import BotonTema from "../BotonTema";
import { TemaContext } from "../TemaContext";
import './NavBar.css';

export default function NavBar() {
    const { darkTheme } = useContext(TemaContext);
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className={`${darkTheme ? 'rouseDarkThemeNavBar' : 'rouseLightThemeNavBar'}`}>
                <Container>
                    <Navbar.Brand as={Link} to={"/"}>Rouse Distribuciones</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" >
                            <Nav.Link as={Link} to={"/"}> Inicio</Nav.Link>
                            <Nav.Link as={Link} to={"/Nosotros"}> Nosotros</Nav.Link>
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to={"/categoria/Descartables"}> Descartables </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/categoria/Reutilizables"}> Reutilizables </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to={"/Home"}> Ofertas </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to={"/Contacto"}> Contacto</Nav.Link>
                            <div className="cart-boton">
                                <CartWidget />
                                <BotonTema />
                            </div>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}