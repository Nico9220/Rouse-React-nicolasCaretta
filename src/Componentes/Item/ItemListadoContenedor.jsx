import React, { useEffect, useState } from "react";
import ItemListado from "./ItemListado";
import s from '../Item/ItemListadoContenedor.module.css'
import { useParams } from "react-router-dom";
import { getProductsByCategoryId } from "./itemArrayData";


export default function ItemListContainer() {
    const [items, setItems] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        /*customFetch(1000, productos, categoryId)
            .then(resultado => setItems(resultado))
            .catch(error => console.log(error));*/
        if (categoryId) {
            getProductsByCategoryId(categoryId).then(prods => setItems(prods));
            console.log(categoryId)
        }
    }, [categoryId])
    return (
        <div className={s.containerI}>
            <ItemListado productos={items}></ItemListado>
        </div>
    )
}