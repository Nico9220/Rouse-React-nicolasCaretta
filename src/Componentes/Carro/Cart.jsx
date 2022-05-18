import React, { useContext } from "react";
import { CartContext } from '../CartContext'
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Cart.css"
import { TemaContext } from "../TemaContext";

export default function Cart() {
    const { darkTheme } = useContext(TemaContext);
    const { cart, removeItem, total } = useContext(CartContext)

    const productosTotal = cart.reduce((total, item) => total + item.quantity, 0);

    if (cart.length === 0) {
        return (
            <>
                <div className={`${darkTheme ? 'rouseDarkThemeVacio' : 'rouseLightThemeVacio'}`}>Tu carrito esta vacio!!</div>
                <Link to={'/'} className="vacioBtn"><Button variant="dark">Ir al Inicio</Button></Link>
            </>
        )
    } else {
        return (
            <>
                <h1 className={`${darkTheme ? 'rouseDarkThemeHuno' : 'rouseLightThemeHuno'}`}>Checkout</h1>
                <div className="carro-card">
                    {cart.length > 0 &&
                        cart.map((item) => (
                            <Card key={item.id} style={{ width: '10rem' }} className="cardGrid">
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
                </div>
                <div className={`${darkTheme ? 'rouseDarkThemeResumen' : 'rouseLightThemeResumen'}`}>
                    <h2>Resumen</h2>
                    <ul><h3>Productos en el carro: {productosTotal}</h3></ul>
                    <ul><h2>Total: ${total}</h2></ul>
                    <ul><Link to={'/ContactForm'}><Button variant="dark">Comprar todo</Button> </Link></ul>
                </div>
            </>
        )
    }
}