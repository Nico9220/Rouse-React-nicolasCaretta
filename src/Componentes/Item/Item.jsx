import React from 'react';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

function Item({ id, nombre, precio, imagen }) {

    return (
        <Card key={id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    $ {precio}
                </Card.Text>
                <Link to={`/detalle/${id}`}>Ver detalle</Link>
            </Card.Body>
        </Card>
    )
}

export default Item;