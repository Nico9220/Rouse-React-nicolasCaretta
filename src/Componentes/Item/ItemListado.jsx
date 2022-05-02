import React from 'react'
import Item from './Item'

function ItemListado({ productos }) {
    return (
        productos.map(p => (
            <Item
                key={p.id}
                id={p.id}
                nombre={p.title}
                precio={p.price}
                imagen={p.imageId}
                categoria={p.categoryId}
            />
        ))
    )
}

export default ItemListado;