import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

function Item({ id, nombre, precio, imagen }) {

    return (
        <div className='productos-card scale' key={id} id={id} style={{ width: "18rem" }}>
            <img src={imagen} alt="imagen" width={"200px"} />
            <div className='titulo-precio'>
                <h4>{nombre}</h4>
                <h5>${precio}</h5>
            </div>
            <button className="linkk"><Link to={`/detalle/${id}`} style={{ textDecoration: "none", color: "white" }} >Detalle</Link></button>
        </div>
    )
}

export default Item;