import React, { useContext } from "react";
import { CartContext } from '../CartContext'
import { Card } from "react-bootstrap";

export default function Cart() {
    const { cart, removeItem, buyAll } = useContext(CartContext)
    return (
        <>
            <div >
                {cart.length} items
            </div>
            {cart.length > 0 &&
                cart.map((item) => (
                    <Card key={item.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.imagen} />
                        <Card.Body>
                            <Card.Title>{item.nombre}</Card.Title>
                            <Card.Text>
                                $ {item.precio}
                            </Card.Text>
                            <Card.Text>
                                {item.quantity}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
        </>
    )
}