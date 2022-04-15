import React from 'react'
import Item from './Item'

function ItemListado({ productos }) {
    return (
        productos.map(p => (
            <Item
                key={p.id}
                id={p.id}
                nombre={p.nombre}
                precio={p.precio}
                imagen={p.imagen}
                categoria={p.categoria}
            />
        ))
    )
}

export default ItemListado;