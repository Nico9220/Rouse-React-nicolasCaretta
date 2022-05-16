import React from 'react'
import Item from './Item'
import './ItemListado.css'

function ItemListado({ productos }) {
    return (
        <>
            <div className='productos-grid'>
                {productos.map(p => (
                    <Item
                        key={p.id}
                        id={p.id}
                        nombre={p.title}
                        precio={p.price}
                        imagen={p.imageId}
                        categoria={p.categoryId}
                    />
                ))}
            </div>
        </>
    )
}

export default ItemListado;