import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import productos from '../Utils/productos';
import findId from '../Utils/findId';
import { useParams } from 'react-router-dom';


const ItemDetailContenedor = () => {
    const [itemDetailId, setItems] = useState({});
    const { id } = useParams();

    useEffect(() => {
        findId(1000, productos, id)
            .then(resultado => setItems(resultado))
            .catch(error => console.log(error));
    }, [id])
    return (
        <>
            < ItemDetail key={itemDetailId.id} nombre={itemDetailId.nombre} precio={itemDetailId.precio} imagen={itemDetailId.imagen} id={itemDetailId.id} />
        </>
    );
};

export default ItemDetailContenedor;