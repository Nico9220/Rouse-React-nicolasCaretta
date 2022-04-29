import React, { useEffect, useState } from "react";
import ItemListado from "./ItemListado";
import s from '../Item/ItemListadoContenedor.module.css'
import customFetch from '../Utils/customFetch';
import productos from "../Utils/productos";
import { useParams } from "react-router-dom";
import { doc, getFirestore, collection, getDocs, query, where } from 'firebase/firestore';


export default function ItemListContainer() {
    const [items, setItems] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        /*customFetch(1000, productos, categoryId)
            .then(resultado => setItems(resultado))
            .catch(error => console.log(error));*/
        const db = getFirestore();
        const productosRef = collection(db, "productos");
        const filtroCategoria = query(productosRef, where("categoria", "==", categoryId));
        const categoryFilter = getDocs(filtroCategoria).then((res) => { setItems(res.docs.map(prod => ({ prod.id, ...prod.data() }))) });
    }, [categoryId])
    return (
        <div className={s.containerI}>
            <ItemListado productos={items}></ItemListado>
        </div>
    )
}