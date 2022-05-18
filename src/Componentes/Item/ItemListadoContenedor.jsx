import React, { useEffect, useState, useContext } from "react";
import ItemListado from "./ItemListado";
import './ItemListado.css'
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { TemaContext } from "../TemaContext";

export default function ItemListContainer() {
    const { darkTheme } = useContext(TemaContext);
    const [items, setItems] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const getProds = collection(db, "Productos");
        getDocs(getProds).then((res) => {
            setItems(res.docs.map((item) => ({ id: item.id, ...item.data() })));
        });
        if (categoryId) {
            const getCat = query(collection(db, "Productos"), where('categoryId', '==', categoryId), orderBy('price', 'desc'));
            getDocs(getCat).then((res) => {
                setItems(res.docs.map((item) => ({ id: item.id, ...item.data() })))
            })
        }
    }, [categoryId]);
    return (
        <div>
            <h1 className={`${darkTheme ? 'rouseDarkThemeTitulo' : 'rouseLightThemeTitulo'}`}>Productos</h1>
            <ItemListado productos={items}></ItemListado>
        </div>
    )
}