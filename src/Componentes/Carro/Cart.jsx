import React, { useContext } from "react";
import { CartContext } from '../CartContext'
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';


export default function Cart() {
    const { cart, removeItem, buyAll } = useContext(CartContext)

    const productosTotal = cart.reduce((total, item) => total + item.quantity, 0);

    const total = cart.reduce((total, item) => total + item.precio * item.quantity, 0);
    if (cart.length === 0) {
        return (
            <>
                <div>Compra algo no seas rata!</div>
                <Link to={'/'}><button>Ir al home</button></Link>
            </>
        )
    } else {

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
                            <Button onClick={() => removeItem(item.id)}>Quitar</Button>
                        </Card>
                    ))}
                <h1>Total: ${total}</h1>
                <h3>Productos en el carro: {productosTotal}</h3>
                <button onClick={buyAll}>Comprar todo</button>
            </>
        )
    }
}