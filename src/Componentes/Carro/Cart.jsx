import React, { useContext } from "react";
import { CartContext } from '../CartContext'
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Cart.css"

export default function Cart() {
    const { cart, removeItem, total } = useContext(CartContext)

    const productosTotal = cart.reduce((total, item) => total + item.quantity, 0);

    if (cart.length === 0) {
        return (
            <>
                <div className="vacio">Tu carrito esta vacio!!</div>
                <Link to={'/'} className="vacioBtn"><Button variant="dark">Ir al home</Button></Link>

            </>
        )
    } else {
        return (
            <>
                <div className="carro-card">
                    {cart.length > 0 &&
                        cart.map((item) => (
                            <Card key={item.id} style={{ width: '25rem' }}>
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
                                <Button onClick={() => removeItem(item.id)} variant="dark">Quitar</Button>
                            </Card>
                        ))}
                    <div className="totales">
                        <li>
                            <ul><h2>Total: ${total}</h2></ul>
                            <ul><h3>Productos en el carro: {productosTotal}</h3></ul>
                            <ul><Link to={'/ContactForm'}><Button variant="dark">Comprar todo</Button> </Link></ul>
                        </li>
                    </div>
                </div>
            </>
        )
    }
}