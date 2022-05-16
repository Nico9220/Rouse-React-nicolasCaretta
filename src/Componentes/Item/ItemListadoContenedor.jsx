import React, { useEffect, useState } from "react";
import ItemListado from "./ItemListado";
/*import s from '../Item/ItemListadoContenedor.module.css'*/
import './ItemListado.css'
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where, orderBy } from 'firebase/firestore';

export default function ItemListContainer() {
    const [items, setItems] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const getProds = collection(db, "Productos");
        getDocs(getProds).then((res) => {
            console.log(res)
            setItems(res.docs.map((item) => ({ id: item.id, ...item.data() })));
        });
        if (categoryId) {
            const getCat = query(collection(db, "Productos"), where('categoryId', '==', categoryId), orderBy('price', 'desc'));
            getDocs(getCat).then((res) => {
                setItems(res.docs.map((item) => ({ id: item.id, ...item.data() })))
            })
        }
    }, [categoryId]);
    console.log(items);
    return (
        <div>
            <ItemListado productos={items}></ItemListado>
        </div>
    )
}