import React from 'react';
import Card from "react-bootstrap/Card"
import ItemCount from './ItemCount';
import { useCartContext } from '../CartContext';
import './Item.css'
import DetalleCompra from '../DetalleCompra'

function ItemDetail({ categoryId, title, price, imageId, id, description, stock }) {
    const { cart, addToCart } = useCartContext()

    function handleOnAdd(quantity) {
        addToCart({ categoryId, title, price, imageId, id, stock }, quantity)

    }
    const added = cart.find((item) => item.id === id);
    console.log(added)
    return (
        <>
            <Card key={id} id={id} style={{ width: '25rem' }} className="estilo-detalle">
                <Card.Img variant="top" src={imageId} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        $ {price}
                    </Card.Text>
                    {!added ? <ItemCount stock={stock} add={handleOnAdd}></ItemCount> : <DetalleCompra />}
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemDetail;