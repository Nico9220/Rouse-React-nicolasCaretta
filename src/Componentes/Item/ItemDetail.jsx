import React from 'react';
import Card from "react-bootstrap/Card"
import ItemCount from './ItemCount';
import { useCartContext } from '../CartContext';
import { Link } from 'react-router-dom';


function ItemDetail({ categoryId, title, price, imageId, id }) {
    const { cart, addToCart } = useCartContext()

    function handleOnAdd(quantity) {
        addToCart({ categoryId, title, price, imageId, id }, quantity)

    }
    const added = cart.find((item) => item.id === id);
    console.log(added)

    return (
        <Card key={id} id={id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageId} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    $ {price}
                </Card.Text>
                {!added ? <ItemCount stock={5} add={handleOnAdd}></ItemCount> : <Link to={'/Cart'}><button>Ir al carrito</button></Link>}
            </Card.Body>
        </Card>
    )
}

export default ItemDetail;