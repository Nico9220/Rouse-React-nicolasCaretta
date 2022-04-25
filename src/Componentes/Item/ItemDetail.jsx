import React, {useState, useContext} from 'react';
import Card from "react-bootstrap/Card"
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useCartContext } from '../CartContext';

function ItemDetail({ id, nombre, precio, imagen }) {
    const [count, setCount] = useState(0);
    const { addToCart } = useCartContext()

    function handleOnAdd(q) {
        addToCart({ id, nombre, precio, imagen }, q)
    }

    const number = (count === 0)

    
    return (
        <Card key={id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    $ {precio}
                </Card.Text>
                {number ? <ItemCount stock={5} onAdd={handleOnAdd}></ItemCount> : <Link to={"/Cart"}>Ir al carrito</Link>}
            </Card.Body>
        </Card>
    )
}

export default ItemDetail;