import React from 'react';
import Card from "react-bootstrap/Card"
import ItemCount from './ItemCount';
import { useCartContext } from '../CartContext';
import { Link } from 'react-router-dom';


function ItemDetail({ categoryId, title, price, imageId, id }) {
    const { cart, addToCart } = useCartContext()

    function handleOnAdd(quantity) {
        addToCart({ categoryId, title, price, imageId }, quantity)
    }
    const added = cart.find(item => item.id === categoryId);
    return (
        <Card key={id} id={id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageId} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    $ {price}
                </Card.Text>
                {added ? <Link to={'/Cart'}><button>Ir al carrito</button></Link> : <ItemCount stock={5} add={handleOnAdd}></ItemCount>}
            </Card.Body>
        </Card>
    )
}

export default ItemDetail;