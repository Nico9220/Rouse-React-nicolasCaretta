import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import productos from '../Utils/productos';
import customFetch from '../Utils/customFetch';


const ItemDetailContenedor = () => {
    const [items, setItems] = useState({});
    useEffect(() => {
        customFetch(2000, productos)
            .then(res => setItems(res.find(nico => nico.id === 1)))
    }, [])
    return (
        <>
            <h2>Desafio: detalle de producto </h2>
            <ItemDetail key={items.id} nombre={items.nombre} precio={items.precio} imagen={items.imagen} />
        </>
    );
};

export default ItemDetailContenedor;