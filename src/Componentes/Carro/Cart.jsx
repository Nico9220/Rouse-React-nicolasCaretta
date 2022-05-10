import React, { useContext } from "react";
import { CartContext } from '../CartContext'
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Cart() {
    const { cart, removeItem, buyAll, total } = useContext(CartContext)

    const productosTotal = cart.reduce((total, item) => total + item.quantity, 0);

    /*const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);*/
    if (cart.length === 0) {
        return (
            <>
                <div>Tu carrito esta vacio!!</div>
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
                            <Card.Img variant="top" src={item.imageId} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    $ {item.price}
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
                <Link to={'/ContactForm'}><button>Comprar todo</button> </Link>
            </>
        )
    }
}