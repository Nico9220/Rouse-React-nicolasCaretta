import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

function DetalleCompra() {
    return (
        <>
            <ul><Link to={'/Cart'}><Button variant="dark">Ir al carrito</Button></Link></ul>
            <ul><Link to={'/'}><Button variant="dark">Seguir comprando</Button></Link></ul>
        </>
    )
}

export default DetalleCompra