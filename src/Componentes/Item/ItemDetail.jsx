import React from 'react';
import Card from "react-bootstrap/Card"
import ItemCount from './ItemCount';
import { useCartContext } from '../CartContext';

function ItemDetail({ id, nombre, precio, imagen }) {
    const { addToCart } = useCartContext()

    function handleOnAdd(q) {
        addToCart({ id, nombre, precio, imagen }, q)
    }

    return (
        <Card key={id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    $ {precio}
                </Card.Text>
                <ItemCount stock={5} onAdd={handleOnAdd}></ItemCount>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail;