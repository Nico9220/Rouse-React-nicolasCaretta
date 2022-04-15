import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >Rouse Distribuciones</Navbar.Brand>
                    <Nav className="me-auto" >
                        <Link to={"/"}>Home</Link>
                        <Link to={"/categoria/Descartables"}>Descartables</Link>
                        <Link to={"/categoria/Reutilizables"}>Reutilizables</Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
        </>
    )
}