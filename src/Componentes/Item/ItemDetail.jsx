import React from 'react';
import Card from "react-bootstrap/Card"
import ItemCount from './ItemCount';
import { useCartContext } from '../CartContext';
import { Link } from 'react-router-dom';


function ItemDetail({ id, nombre, precio, imagen }) {
    const { cart, addToCart } = useCartContext()

    function handleOnAdd(quantity) {
        addToCart({ id, nombre, precio, imagen }, quantity)
    }
    const added = cart.find(item => item.id === id);
    return (
        <Card key={id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    $ {precio}
                </Card.Text>
                {added ? <Link to={'/Cart'}><button>Ir al carrito</button></Link> : <ItemCount stock={5} add={handleOnAdd}></ItemCount>}
            </Card.Body>
        </Card>
    )
}

export default ItemDetail;