import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Item.css'
import { TemaContext } from "../TemaContext";

function Item({ id, nombre, precio, imagen }) {
    const { darkTheme } = useContext(TemaContext);
    return (
        <div className='productos-card scale' key={id} id={id} style={{ width: "18rem" }}>
            <img src={imagen} alt="imagen" width={"200px"} />
            <div className='titulo-precio'>
                <h4>{nombre}</h4>
                <h5>${precio}</h5>
            </div>
            <button className={`${darkTheme ? 'rouseDarkThemeLink' : 'rouseLightThemeLink'}`}><Link to={`/detalle/${id}`} style={{ textDecoration: "none" }} >Detalle</Link></button>
        </div>
    )
}

export default Item;