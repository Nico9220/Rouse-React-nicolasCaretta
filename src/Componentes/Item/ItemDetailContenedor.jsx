import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import productos from '../Utils/productos';
import filterId from '../Utils/filterId';
import { useParams } from 'react-router-dom';


const ItemDetailContenedor = () => {
    const [items, setItems] = useState({});
    const { id } = useParams()

    useEffect(() => {
        filterId(1000, productos, id)
            .then(resultado => setItems(resultado))
            .catch(error => console.log(error));
    }, [id])
    return (
        <>
            
            <ItemDetail key={items.id} nombre={items.nombre} precio={items.precio} imagen={items.imagen} />
        </>
    );
};

export default ItemDetailContenedor;