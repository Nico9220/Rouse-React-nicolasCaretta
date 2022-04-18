import React, {useState} from 'react';
import Card from "react-bootstrap/Card"
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

function ItemDetail({ id, nombre, precio, imagen }) {
    const [count, setCount] = useState(0);
    

    const add = (cantidad) =>{
        setCount(cantidad);
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
                {number ? <ItemCount stock={5} add={add}></ItemCount> : <Link to={"/Cart"}>Ir al carrito</Link>}
            </Card.Body>
        </Card>
    )
}

export default ItemDetail;