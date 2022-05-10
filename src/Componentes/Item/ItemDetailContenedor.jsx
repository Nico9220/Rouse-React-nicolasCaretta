import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from 'firebase/firestore'


const ItemDetailContenedor = () => {
    const [itemDetailId, setItems] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "Productos", id);
        console.log(docRef);
        if (id) {
            getDoc(docRef).then((prod) => { setItems({ ...prod.data() }) });
        }
    }, [id]);
    console.log(itemDetailId);
    return (
        <>
            < ItemDetail key={itemDetailId.id} title={itemDetailId.title} price={itemDetailId.price} imageId={itemDetailId.imageId} id={itemDetailId.id} categoryId={itemDetailId.categoryId} />
        </>
    );
};

export default ItemDetailContenedor;
