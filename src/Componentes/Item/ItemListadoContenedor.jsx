import React, { useEffect, useState } from "react";
import ItemListado from "./ItemListado";
import s from '../Item/ItemListadoContenedor.module.css'
import customFetch from '../Utils/customFetch';
import productos from "../Utils/productos";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
    const [items, setItems] = useState([]);

    const { id } = useParams()

    useEffect(() => {
        customFetch(1000, productos)
            .then(resultado => setItems(resultado))
            .catch(error => console.log(error));
    }, [id])
    return (
        <div className={s.containerI}>
            <ItemListado productos={items} />
        </div>
    )
}